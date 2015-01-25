declare class Browser {
    public name: string;
    public version: number;
    private versionSearchString;
    constructor();
    public searchString(data: any): any;
    public searchVersion(dataString: any): number;
    private dataBrowser;
}
declare var browser: Browser;
