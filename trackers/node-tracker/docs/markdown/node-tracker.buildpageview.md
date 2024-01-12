<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@snowplow/node-tracker](./node-tracker.md) &gt; [buildPageView](./node-tracker.buildpageview.md)

## buildPageView() function

Build a Page View Event Represents a Page View, which is typically fired as soon as possible when a web page is loaded within the users browser. Often also fired on "virtual page views" within Single Page Applications (SPA).

<b>Signature:</b>

```typescript
declare function buildPageView(event: PageViewEvent): PayloadBuilder;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | PageViewEvent | Contains the properties for the Page View event |

<b>Returns:</b>

PayloadBuilder

PayloadBuilder to be sent to 
