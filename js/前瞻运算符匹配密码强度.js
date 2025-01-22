function checkPasswordStrength(password) {
    // 至少 8 个字符，包含至少一个大写字母、一个小写字母、一个数字和一个特殊字符
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
        return "强密码";
    } else {
        // 至少 6 个字符，包含字母和数字
        regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (regex.test(password)) {
            return "中等密码";
        } else {
            return "弱密码";
        }
    }
}

// 示例使用
console.log(checkPasswordStrength("Abc123"));
console.log(checkPasswordStrength("Abc123!@#"));
console.log(checkPasswordStrength("Abcdefghij1")); 