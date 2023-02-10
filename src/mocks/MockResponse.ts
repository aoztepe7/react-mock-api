import { v4 as uuidv4 } from 'uuid';

export enum enmServiceMessageType {
    Undefined = 0,
    Error = 1,
    Success = 2,
    Information = 3,
    Warning = 4
}

class ExceptionMessage {
    message?: string;
    stackTracing?: string;
    source?: string;
    detail?: string;
    constructor() {
        this.message = "Exception Occured";
        this.stackTracing = "Stack Trace Not Available";
        this.source = "TV-API";
        this.detail = "Detail Not Available"
    }
}

class ApiResponseMessage {
    id?: number
    code?: string;
    messageType?: enmServiceMessageType;
    message?: string;
    url?: string;
    exception?: ExceptionMessage;
    detail?: string;
    provider?: string;
    constructor() {
        this.id = 1;
        this.code = "TEST";
        this.messageType = enmServiceMessageType.Error;
        this.message = "Mock Error Occured";
        this.url = "https://stackoverflow.com/";
        this.exception = new ExceptionMessage();
        this.detail = "Exception Detail";
        this.provider = "Test Provider";
    }
}

class BaseApiResponseHeader {
    requestId?: string;
    success?: boolean;
    responseTime?: Date;
    messages?: Array<ApiResponseMessage>;
    constructor(pSuccess: boolean = true, pMessages: Array<ApiResponseMessage> = []) {
        this.requestId = uuidv4();
        this.success = pSuccess;
        this.responseTime = new Date();
        this.messages = pMessages;
    }
}

export class ServiceResponse<T>
{
    header?: BaseApiResponseHeader;
    body?: T;
    constructor(isSuccess: boolean = true) {
        if (!isSuccess)
            this.header = new BaseApiResponseHeader(isSuccess, [new ApiResponseMessage()]);
        else
            this.header = new BaseApiResponseHeader(isSuccess);
    }
}

