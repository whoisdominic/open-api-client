export interface OpenApi {
    openapi: string;
    info: Info;
    tags?: (null)[] | null;
    servers?: (null)[] | null;
    components: Components;
    paths: Paths;
  }
  export interface Info {
    title: string;
    description: string;
    version: string;
    contact: Contact;
  }
  export interface Contact {
  }
  export interface Components {
    schemas: Schemas;
  }
  export interface Schemas {
    TwoFactorAuthDTO: TwoFactorAuthDTO;
  }
  export interface TwoFactorAuthDTO {
    type: string;
    properties: Properties;
    required?: (string)[] | null;
  }
  export interface Properties {
    phoneNumber: PhoneNumberOrCode;
    code: PhoneNumberOrCode;
  }
  export interface PhoneNumberOrCode {
    type: string;
  }
  export interface Paths {
    /: /;
    /users/login: /users/loginOr/users/confirmOr/users/resend;
    /users/confirm: /users/loginOr/users/confirmOr/users/resend;
    /users/resend: /users/loginOr/users/confirmOr/users/resend;
  }
  export interface / {
    get: Get;
  }
  export interface Get {
    operationId: string;
    parameters?: (null)[] | null;
    responses: Responses;
    tags?: (string)[] | null;
  }
  export interface Responses {
    200: 200Or201;
  }
  export interface 200Or201 {
    description: string;
  }
  export interface /users/loginOr/users/confirmOr/users/resend {
    post: Post;
  }
  export interface Post {
    operationId: string;
    parameters?: (null)[] | null;
    requestBody: RequestBody;
    responses: Responses1;
    tags?: (string)[] | null;
  }
  export interface RequestBody {
    required: boolean;
    content: Content;
  }
  export interface Content {
    application/json: Application/json;
  }
  export interface Application/json {
    schema: Schema;
  }
  export interface Schema {
    $ref: string;
  }
  export interface Responses1 {
    201: 200Or201;
  }
  