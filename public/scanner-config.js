Scanner = {
    ScanParams: {},
    getConfig: function () {
        KJS.Scanner.changeConfigGroupId(0);
        this.ScanParams = KJS.Scanner.getConfig(KJS.Scanner.ConfigId.ScanParams);
        this.ScanParams.trigger.triggerMode = "TRIGGER_AT_RELEASE";
    },
    setConfig: function () {
        KJS.Scanner.setConfig(KJS.Scanner.ConfigId.ScanParams, this.ScanParams);
    },
};