---
title: 身份证验证方法说明
date: 2020-04-16
categories:
 - 验证
tags:
 - javascript
 - validation
 - idCard
---
# 身份证验证
身份证验证方法，该系列方法根据验证强度会返回`other`字段，包含`地区编码`、`地区名称`、`出生日期`、`年龄`、`性别`。

## idCardLength
验证字符串是否符合身份证长度

名称|类型|默认值|必须|说明
---|---|---|---|---
idcard|String|''|true|被检测的字符串
length|Number|18|true|身份证长度，可选值15,18

```javascript
import validations from '@/validations'

validations.idCardLength(idcard, length)
```

## idCardSimple
身份证简单验证，只验证地区和出生日期，返回`地区编码`、`地区名称`、`出生日期`、`年龄`、`性别`。

名称|类型|默认值|必须|说明
---|---|---|---|---
idcard|String|''|true|被检测的字符串
length|Number|18|true|身份证长度，可选值15,18

```javascript
import validations from '@/validations'

validations.idCardSimple(idcard, length)
```

## idCardStrict
身份证严格校验，该校验规则只适用18位的二代身份证。
验证地区、出生日期、校验码。返回`地区编码`、`地区名称`、`出生日期`、`年龄`、`性别`。

名称|类型|默认值|必须|说明
---|---|---|---|---
idcard|String|''|true|被检测的字符串

```javascript
import validations from '@/validations'

validations.idCardStrict(idcard)
```