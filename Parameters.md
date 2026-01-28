# 参数说明

## APP_CONFIG

应用配置，用于配置登录及界面相关参数。

| 参数名                      | 类型    | 说明                                           | 示例值                             |
| :-------------------------- | :------ | :--------------------------------------------- | :--------------------------------- |
| `topActions`                | Array   | 顶部自定义操作按钮列表                         | `[{"name":"自定义按钮1",...}]`     |
| `bottomActions`             | Array   | 底部自定义操作按钮列表                         | `[{"name":"自定义按钮2",...}]`     |
| `loginParams`               | Object  | 登录相关参数设置                               | -                                  |
| `loginParams.addParams`     | Object  | 登录时的额外参数                               | `{"agreement":true}`               |
| `loginParams.captchaVerify` | Boolean | 是否开启验证码校验                             | `true`                             |
| `tokenPage`                 | String  | Token 页面路由地址，可以是 http 开头的完整地址 | `/token`                           |
| `tokenQueryPath`            | String  | Token 查询接口路径                             | `/api/token?p=1&size=20`           |
| `exchangeVerify`            | Boolean | 是否开启兑换校验                               | `false`                            |
| `createOrderPath`           | String  | 创建订单接口路径                               | `/api/user/order`                  |
| `checkOrderPath`            | String  | 检查订单状态接口路径                           | `/api/user/order/status?trade_no=` |
| `disableCustomBaseUrl`      | Boolean | 是否禁用自定义 Base URL                        | `false`                            |
| `payMethods`                | Array   | 支付方法列表                                   | `["alipay","wxpay",]`              |

### 完整示例

```json
{
  "bottomActions": [
    {
      "name": "自定义按钮2",
      "icon": "https://example.com/icon2.png",
      "url": "https://example.com/page2"
    }
  ],
  "checkOrderPath": "/api/user/order/status?trade_no=",
  "createOrderPath": "/api/user/order",
  "disableCustomBaseUrl": false,
  "exchangeVerify": false,
  "loginParams": {
    "addParams": {
      "agreement": true
    },
    "captchaVerify": true
  },
  "tokenPage": "/token",
  "tokenQueryPath": "/api/token?p=1&size=20",
  "topActions": [
    {
      "name": "自定义按钮1",
      "icon": "https://example.com/icon1.png",
      "url": "https://example.com/page1"
    }
  ]
}
```

## FEATURE_FLAGS

- 类型：可选
- 描述：用于控制特性功能，支持多个功能标志，使用 `+` 增加一个功能，使用 `-` 来关闭一个功能，多个功能标志之间使用英文逗号 `,` 隔开，最外层建议添加引号 `"` 以避免解析错误。
- 默认值：`-`
- 示例：`"-welcome_suggest"`
  说明：
  - painting：绘图模块
  - music：音乐模块
  - video：视频模块
  - ai_canvas：AI 无限画布模块
  - show_creation：以上所有功能模块

示例

```shell
-e FEATURE_FLAGS=-painting,-music,-video,-ai_canvas,-show_creation,-market,-ai_image,-create_session,-knowledge_base,-welcome_suggest,-changelog,+commercial_hide_github,+commercial_hide_docs
```
