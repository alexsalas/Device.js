new Test().add([
        testDevice,
        testDeviceNexus5,
        testDeviceRevision_Nexus7_2013,
    ]).run();

function testDevice(next) {
    var spec = Device();

    console.log("testDevice ok: " + spec.DEVICE.TOKEN);
    next && next.pass();
}

function testDeviceNexus5(next) {
    var userAgent = "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36";
    var spec = Device(userAgent);

    if (spec.DEVICE.TOKEN   === "Nexus 5" &&
        spec.DEVICE.BRAND   === "Google" &&
        spec.DISPLAY.LONG   === 1920 &&
        spec.DISPLAY.SHORT  === 1080 &&
        spec.DISPLAY.PPI    === 445 &&
        spec.DISPLAY.DPR    === 3 &&
        spec.MEMORY.RAM     === 2 &&
        spec.GPU.TYPE       === "Adreno") {
        console.log("testDeviceSpec ok: " + spec.DEVICE.TOKEN);
        next && next.pass();
    } else {
        console.log("testDeviceSpec ng: " + spec.DEVICE.TOKEN);
        next && next.miss();
    }
}

function testDeviceRevision_Nexus7_2013(next) {
    var userAgent = "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.111 Safari/537.36";
    var spec = Device( userAgent );

    if (spec.DEVICE.TOKEN     === "Nexus 7 (2013)" &&
        spec.DEVICE.SOC       === "APQ8064" &&
        spec.DEVICE.GPS       === true &&
        spec.OS.VERSION.FIRST === 430 &&
        spec.DISPLAY.DPR      === 2 &&
        spec.MEMORY.RAM       === 2 &&
        spec.GPU.TYPE         === "Adreno") {
        console.log("testDeviceRevision_Nexus7_2013 ok: " + spec.DEVICE.TOKEN);
        next && next.pass();
    } else {
        console.log("testDeviceRevision_Nexus7_2013 ng: " + spec.DEVICE.TOKEN);
        next && next.miss();
    }
}