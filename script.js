function generateOutput() {
    let asiaRitelJatinegara = document.getElementById('asiaRitelJatinegara').value || 'xxx';
    let ujbKarawangJatinegara = document.getElementById('ujbKarawangJatinegara').value || 'xxx';
    let asiaRitelCikarang = document.getElementById('asiaRitelCikarang').value || 'xxx';
    let ujbKarawangCikarang = document.getElementById('ujbKarawangCikarang').value || 'xxx';
    let twtaPrimary1 = document.getElementById('twtaPrimary1').value || 'xxx';
    let twtaPrimary2 = document.getElementById('twtaPrimary2').value || 'xxx';
    let beaconLevelPrimary = document.getElementById('beaconLevelPrimary').value || 'xxx';
    let twtaSecondary1 = document.getElementById('twtaSecondary1').value || 'xxx';
    let twtaSecondary2 = document.getElementById('twtaSecondary2').value || 'xxx';
    let beaconLevelSecondary = document.getElementById('beaconLevelSecondary').value || 'xxx';

    let output = `
     DARK FIBER

RX Jatinegara
Asia Ritel   : ${asiaRitelJatinegara} dBm 
UJB Karawang : ${ujbKarawangJatinegara} dBm 

RX Cikarang
Asia Ritel   : ${asiaRitelCikarang} dBm 
UJB Karawang : ${ujbKarawangCikarang} dBm

----------------------------------------
       TWTA PRIMARY
${twtaPrimary1} W
${twtaPrimary2} W

       PRIMARY [RHCP, LHCP, Backup]
BDC : ON, ON, OFF
BUC : ON, ON, OFF
LNA : ON, ON, OFF

     BEACON LEVEL PRIMARY
${beaconLevelPrimary} dB

----------------------------------------
     TWTA SECONDARY
${twtaSecondary1} W
${twtaSecondary2} W

       SECONDARY [RHCP, LHCP, Backup]
BDC : ON, ON, OFF
BUC : ON, ON, OFF
LNA : ON, ON, OFF

     BEACON LEVEL SECONDARY
${beaconLevelSecondary} dB

----------------------------------------
Outroute Capacity LC1 : OK
Inroute Capacity LC1 : OK
Inroute & Outroute Capacity LC2 (DUPLICATE) : OK
MXM : OK
    `;

    document.getElementById('output').textContent = output;
}

function copyOutput() {
    let outputDiv = document.getElementById('output');
    let range = document.createRange();
    range.selectNode(outputDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Output copied to clipboard!");
}

function clearOutput() {
    document.getElementById('output').textContent = '';
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}

function exitPage() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
    }
}