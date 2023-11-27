"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[472],{2932:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(5893),o=t(1151);const i={},a=void 0,s={id:"node-tracker/node-tracker.api",title:"node-tracker.api",description:'API Report File for "@snowplow/node-tracker"',source:"@site/docs/node-tracker/node-tracker.api.md",sourceDirName:"node-tracker",slug:"/node-tracker/node-tracker.api",permalink:"/snowplow-javascript-tracker/docs/node-tracker/node-tracker.api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"node-tracker.version",permalink:"/snowplow-javascript-tracker/docs/node-tracker/markdown/node-tracker.version"}},c={},d=[{value:"API Report File for &quot;@snowplow/node-tracker&quot;",id:"api-report-file-for-snowplownode-tracker",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"api-report-file-for-snowplownode-tracker",children:'API Report File for "@snowplow/node-tracker"'}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Do not edit this file. It is a report generated by ",(0,r.jsx)(e.a,{href:"https://api-extractor.com/",children:"API Extractor"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'\nimport { Agents } from \'got\';\nimport { PromiseCookieJar } from \'got\';\nimport { RequestError } from \'got\';\nimport { RequiredRetryOptions } from \'got\';\nimport { Response } from \'got\';\nimport { ToughCookieJar } from \'got\';\n\n// @public\nexport interface AdClickEvent {\n    advertiserId?: string;\n    bannerId?: string;\n    campaignId?: string;\n    clickId?: string;\n    cost?: number;\n    costModel?: "cpa" | "cpc" | "cpm";\n    impressionId?: string;\n    targetUrl: string;\n    zoneId?: string;\n}\n\n// @public\nexport interface AdConversionEvent {\n    action?: string;\n    advertiserId?: string;\n    campaignId?: string;\n    category?: string;\n    conversionId?: string;\n    cost?: number;\n    costModel?: "cpa" | "cpc" | "cpm";\n    initialValue?: number;\n    property?: string;\n}\n\n// @public\nexport interface AddToCartEvent {\n    category?: string;\n    currency?: string;\n    name?: string;\n    quantity: number;\n    sku: string;\n    unitPrice?: number;\n}\n\n// @public\nexport interface AdImpressionEvent {\n    advertiserId?: string;\n    bannerId?: string;\n    campaignId?: string;\n    cost?: number;\n    costModel?: "cpa" | "cpc" | "cpm";\n    impressionId?: string;\n    targetUrl?: string;\n    zoneId?: string;\n}\n\n// @public\nexport function buildAdClick(event: AdClickEvent): PayloadBuilder;\n\n// @public\nexport function buildAdConversion(event: AdConversionEvent): PayloadBuilder;\n\n// @public\nexport function buildAddToCart(event: AddToCartEvent): PayloadBuilder;\n\n// @public\nexport function buildAdImpression(event: AdImpressionEvent): PayloadBuilder;\n\n// @public\nexport function buildConsentGranted(event: ConsentGrantedEvent): {\n    event: PayloadBuilder;\n    context: {\n        schema: string;\n        data: Record<string, unknown>;\n    }[];\n};\n\n// @public\nexport function buildConsentWithdrawn(event: ConsentWithdrawnEvent): {\n    event: PayloadBuilder;\n    context: {\n        schema: string;\n        data: Record<string, unknown>;\n    }[];\n};\n\n// @public\nexport function buildEcommerceTransaction(event: EcommerceTransactionEvent): PayloadBuilder;\n\n// @public\nexport function buildEcommerceTransactionItem(event: EcommerceTransactionItemEvent): PayloadBuilder;\n\n// @public\nexport function buildFormFocusOrChange(event: FormFocusOrChangeEvent): PayloadBuilder;\n\n// @public\nexport function buildFormSubmission(event: FormSubmissionEvent): PayloadBuilder;\n\n// @public\nexport function buildLinkClick(event: LinkClickEvent): PayloadBuilder;\n\n// @public\nexport function buildPagePing(event: PagePingEvent): PayloadBuilder;\n\n// @public\nexport function buildPageView(event: PageViewEvent): PayloadBuilder;\n\n// @public\nexport function buildRemoveFromCart(event: RemoveFromCartEvent): PayloadBuilder;\n\n// @public\nexport function buildScreenView(event: ScreenViewEvent): PayloadBuilder;\n\n// @public\nexport function buildSelfDescribingEvent(event: SelfDescribingEvent): PayloadBuilder;\n\n// @public\nexport function buildSiteSearch(event: SiteSearchEvent): PayloadBuilder;\n\n// @public\nexport function buildSocialInteraction(event: SocialInteractionEvent): PayloadBuilder;\n\n// @public\nexport function buildStructEvent(event: StructuredEvent): PayloadBuilder;\n\n// @public\nexport interface ConsentGrantedEvent {\n    description?: string;\n    expiry?: string;\n    id: string;\n    name?: string;\n    version: string;\n}\n\n// @public\nexport interface ConsentWithdrawnEvent {\n    all: boolean;\n    description?: string;\n    id?: string;\n    name?: string;\n    version?: string;\n}\n\n// @public\nexport interface ContextEvent {\n    event: Payload;\n    eventSchema: string;\n    eventType: string;\n}\n\n// @public\nexport type ContextFilter = (args?: ContextEvent) => boolean;\n\n// @public\nexport type ContextGenerator = (args?: ContextEvent) => SelfDescribingJson | SelfDescribingJson[] | undefined;\n\n// @public\nexport interface CoreConfiguration {\n    /* Should payloads be base64 encoded when built */\n    // (undocumented)\n    base64?: boolean;\n    /* A list of all the plugins to include at load */\n    // (undocumented)\n    callback?: (PayloadData: PayloadBuilder) => void;\n    /* A list of all the plugins to include at load */\n    // (undocumented)\n    corePlugins?: Array<CorePlugin>;\n}\n\n// @public\nexport interface CorePlugin {\n    // Warning: (ae-forgotten-export) The symbol "TrackerCore" needs to be exported by the entry point index.module.d.ts\n    activateCorePlugin?: (core: TrackerCore) => void;\n    afterTrack?: (payload: Payload) => void;\n    beforeTrack?: (payloadBuilder: PayloadBuilder) => void;\n    contexts?: () => SelfDescribingJson[];\n    // Warning: (ae-forgotten-export) The symbol "Logger" needs to be exported by the entry point index.module.d.ts\n    logger?: (logger: Logger) => void;\n}\n\n// @public\nexport interface EcommerceTransactionEvent {\n    affiliation?: string;\n    city?: string;\n    country?: string;\n    currency?: string;\n    orderId: string;\n    shipping?: number;\n    state?: string;\n    tax?: number;\n    total: number;\n}\n\n// @public\nexport interface EcommerceTransactionItemEvent {\n    category?: string;\n    currency?: string;\n    name?: string;\n    orderId: string;\n    price: number;\n    quantity?: number;\n    sku: string;\n}\n\n// @public (undocumented)\nexport interface Emitter {\n    // (undocumented)\n    flush: () => void;\n    // (undocumented)\n    input: (payload: Payload) => void;\n}\n\n// @public\nexport interface FormFocusOrChangeEvent {\n    elementClasses?: Array<string> | null;\n    elementId: string;\n    formId: string;\n    nodeName: string;\n    schema: "change_form" | "focus_form";\n    type?: string | null;\n    value: string | null;\n}\n\n// @public\nexport interface FormSubmissionEvent {\n    // Warning: (ae-forgotten-export) The symbol "FormElement" needs to be exported by the entry point index.module.d.ts\n    elements?: Array<FormElement>;\n    formClasses?: Array<string>;\n    formId: string;\n}\n\n// @public\nexport function gotEmitter(endpoint: string, protocol?: HttpProtocol, port?: number, method?: HttpMethod, bufferSize?: number, retry?: number | Partial<RequiredRetryOptions>, cookieJar?: PromiseCookieJar | ToughCookieJar, callback?: (error?: RequestError, response?: Response<string>) => void, agents?: Agents): Emitter;\n\n// @public (undocumented)\nexport enum HttpMethod {\n    // (undocumented)\n    GET = "get",\n    // (undocumented)\n    POST = "post"\n}\n\n// @public (undocumented)\nexport enum HttpProtocol {\n    // (undocumented)\n    HTTP = "http",\n    // (undocumented)\n    HTTPS = "https"\n}\n\n// @public\nexport interface LinkClickEvent {\n    elementClasses?: Array<string>;\n    elementContent?: string;\n    elementId?: string;\n    elementTarget?: string;\n    targetUrl: string;\n}\n\n// @public\nexport interface PagePingEvent extends PageViewEvent {\n    maxXOffset?: number;\n    maxYOffset?: number;\n    minXOffset?: number;\n    minYOffset?: number;\n}\n\n// @public\nexport interface PageViewEvent {\n    pageTitle?: string | null;\n    pageUrl?: string | null;\n    referrer?: string | null;\n}\n\n// @public\nexport type Payload = Record<string, unknown>;\n\n// @public\nexport interface PayloadBuilder {\n    add: (key: string, value: unknown) => void;\n    addContextEntity: (entity: SelfDescribingJson) => void;\n    addDict: (dict: Payload) => void;\n    addJson: (keyIfEncoded: string, keyIfNotEncoded: string, json: Record<string, unknown>) => void;\n    build: () => Payload;\n    // Warning: (ae-forgotten-export) The symbol "EventJson" needs to be exported by the entry point index.module.d.ts\n    getJson: () => EventJson;\n    getPayload: () => Payload;\n    // Warning: (ae-forgotten-export) The symbol "JsonProcessor" needs to be exported by the entry point index.module.d.ts\n    withJsonProcessor: (jsonProcessor: JsonProcessor) => void;\n}\n\n// @public\nexport interface RemoveFromCartEvent {\n    category?: string;\n    currency?: string;\n    name?: string;\n    quantity: number;\n    sku: string;\n    unitPrice?: number;\n}\n\n// @public\nexport interface ScreenViewEvent {\n    id?: string;\n    name?: string;\n}\n\n// @public\nexport interface SelfDescribingEvent {\n    event: SelfDescribingJson;\n}\n\n// @public\nexport type SelfDescribingJson<T extends Record<keyof T, unknown> = Record<string, unknown>> = {\n    schema: string;\n    data: T;\n};\n\n// @public\nexport interface SiteSearchEvent {\n    filters?: Record<string, string | boolean>;\n    pageResults?: number;\n    terms: Array<string>;\n    totalResults?: number;\n}\n\n// @public\nexport interface SocialInteractionEvent {\n    action: string;\n    network: string;\n    target?: string;\n}\n\n// @public\nexport interface StructuredEvent {\n    // (undocumented)\n    action: string;\n    // (undocumented)\n    category: string;\n    // (undocumented)\n    label?: string;\n    // (undocumented)\n    property?: string;\n    // (undocumented)\n    value?: number;\n}\n\n// Warning: (ae-forgotten-export) The symbol "TrueTimestamp" needs to be exported by the entry point index.module.d.ts\n// Warning: (ae-forgotten-export) The symbol "DeviceTimestamp" needs to be exported by the entry point index.module.d.ts\n//\n// @public\nexport type Timestamp = TrueTimestamp | DeviceTimestamp | number;\n\n// @public (undocumented)\nexport interface Tracker extends TrackerCore {\n    setDomainUserId: (userId: string) => void;\n    setNetworkUserId: (userId: string) => void;\n    setSessionId: (sessionId: string) => void;\n    setSessionIndex: (sessionIndex: string | number) => void;\n}\n\n// @public\nexport function tracker(emitters: Emitter | Array<Emitter>, namespace: string, appId: string, encodeBase64: boolean): Tracker;\n\n// @public (undocumented)\nexport const version: string;\n\n// (No @packageDocumentation comment for this package)\n\n'})})]})}function l(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);