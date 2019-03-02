module.exports = {
  WeakAuraBlacklist: /((getfenv|setfenv|loadstring|pcall|SendMail|SetTradeMoney|AddTradeMoney|PickupTradeMoney|PickupPlayerMoney|TradeFrame|MailFrame|EnumerateFrames|RunScript|AcceptTrade|SetSendMailMoney|EditMacro|SlashCmdList|DevTools_DumpCommand|hash_SlashCmdList|CreateMacro|SetBindingMacro|GuildDisband|GuildUninvite)([\s]*\([^\)]*\))?)/g,
  MaliciousCode: /((UninviteUnit)([\s]*\([^\)]*\))?)/g,
  LuaKeyWord: /\b(and|break|do|else|elseif|end|false|for|if|in|local|nil|not|repeat|return|then|true|until|while|_G|_VERSION|getfenv|getmetatable|ipairs|load|module|next|pairs|pcall|print|rawequal|rawget|rawset|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall|coroutine|debug|math|package|string|table|SetAttribute|SetAllPoints|CreateFrame|unit|player|target)\b.*\s/,
  RegexPasteBinLink: /^https?:\/\/pastebin.com\/([\w]+)$/,
  looksLikeDeflate: /^[a-zA-Z0-9\(\)]*$/,
  looksLikeElvUI: /^[a-zA-Z0-9=\+\/]*$/,
  looksLikeGrid: /^\[=== (.*) profile ===\]\n[ABCDEF0-9\n]+\n\[===/m,
  looksLikeMDT: /^[a-zA-Z0-9\(\)]*$/,
  looksLikePlater: /^[a-zA-Z0-9\(\)]*$/,
  looksLikeTotalRP3: /^\^.+\^\^$|^![a-zA-Z0-9\(\)]*$/,
  looksLikeVuhDo: /^[a-zA-Z0-9=\+\/]*$/,
  looksLikeWeakAura: /^!?[a-zA-Z0-9\(\)]*$/,
}