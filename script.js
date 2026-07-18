function processSafeMod() {
    const version = document.getElementById('modVersion').value;
    const input = document.getElementById('modPrompt').value.trim();
    const outputArea = document.getElementById('outputArea');
    const codeView = document.getElementById('codeView');

    if (!input) {
        alert("Please input a description first.");
        return;
    }

    // Anti-Hijack Security Filter
    if (input.length > 500 || input.includes("<script>") || input.includes("hijack")) {
        alert("🚨 SYSTEM WARNING: INPUT IS ACTING SUS! 🚨\nNice try, buddy. Potty training mode activated.");
        codeView.textContent = `// ERROR: Malicious activity detected.\nfunction emergencyStop() {\n    clientMessage("Nice try, hacker!");\n}`;
        outputArea.style.display = 'block';
        return;
    }

    const cleanInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let safeScript = `// File: mod_script.js\n// Platform: ${version}\n// Verified Request: ${cleanInput}\n\nfunction useItemHook(x, y, z, itemId) {\n    clientMessage("Mod successfully loaded on ${version}!");\n}`;

    codeView.textContent = safeScript;
    outputArea.style.display = 'block';
}
