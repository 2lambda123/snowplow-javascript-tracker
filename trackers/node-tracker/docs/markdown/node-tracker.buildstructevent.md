<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@snowplow/node-tracker](./node-tracker.md) &gt; [buildStructEvent](./node-tracker.buildstructevent.md)

## buildStructEvent() function

Build a Structured Event A classic style of event tracking, allows for easier movement between analytics systems. A loosely typed event, creating a Self Describing event is preferred, but useful for interoperability.

<b>Signature:</b>

```typescript
declare function buildStructEvent(event: StructuredEvent): PayloadBuilder;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | StructuredEvent | Contains the properties for the Structured event |

<b>Returns:</b>

PayloadBuilder

PayloadBuilder to be sent to 

