var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Tempate;
(function (Tempate) {
    var url = "";
    var jwtToken;
    var KeyboardMarkup = /** @class */ (function () {
        function KeyboardMarkup(title, content) {
            this.title = title;
            this.content = content;
        }
        return KeyboardMarkup;
    }());
    var ReplyKeyboardButton = /** @class */ (function () {
        function ReplyKeyboardButton(text) {
            this.text = text;
        }
        return ReplyKeyboardButton;
    }());
    var InlineKeyboardButton = /** @class */ (function () {
        function InlineKeyboardButton(url, text) {
            this.url = url;
            this.text = text;
        }
        return InlineKeyboardButton;
    }());
    var CommandAction = /** @class */ (function () {
        function CommandAction(content, commandActionType, telegramBotId) {
            this.content = content;
            this.commandActionType = commandActionType;
            this.telegramBotId = telegramBotId;
        }
        return CommandAction;
    }());
    var CommandActionType;
    (function (CommandActionType) {
        CommandActionType[CommandActionType["Text"] = 0] = "Text";
        CommandActionType[CommandActionType["HttpPost"] = 1] = "HttpPost";
        CommandActionType[CommandActionType["InlineKeyboard"] = 2] = "InlineKeyboard";
        CommandActionType[CommandActionType["ReplyKeyboard"] = 3] = "ReplyKeyboard";
    })(CommandActionType || (CommandActionType = {}));
    var RequestType;
    (function (RequestType) {
        RequestType["GET"] = "GET";
        RequestType["POST"] = "POST";
        RequestType["PUT"] = "PUT";
        RequestType["DELETE"] = "DELETE";
    })(RequestType || (RequestType = {}));
    var Command = /** @class */ (function () {
        function Command(command, description, isActive, telegramBotId, commandActionId) {
            this.command = command;
            this.description = description;
            this.isActive = isActive;
            this.telegramBotId = telegramBotId;
            this.commandActionId = commandActionId;
        }
        return Command;
    }());
    var TelegramBot = /** @class */ (function () {
        function TelegramBot(token, isActive, userId) {
            this.token = token;
            this.isActive = isActive;
            this.userId = userId;
        }
        return TelegramBot;
    }());
    var Value = /** @class */ (function () {
        function Value(value) {
            this.value = value;
        }
        return Value;
    }());
    function SendRequest(urlEnd, requestType, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(url).concat(urlEnd), {
                            method: requestType,
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + jwtToken,
                            },
                            body: JSON.stringify(data)
                        })
                            .then(function (response) {
                            if (response.status == 401) {
                                window.location.replace("".concat(url, "login"));
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
})(Tempate || (Tempate = {}));
//# sourceMappingURL=template.js.map