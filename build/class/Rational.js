"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }
    // 將分數化為最簡分數
    normalize() {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }
    // 檢測兩個Rational物件是否相等
    equals(other) {
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }
    // 檢測是否為整數
    isWhole() {
        return this.numerator % this.denominator === 0;
    }
    // 檢測是否為小數
    isDecimal() {
        return !this.isWhole();
    }
    // 靜態方法，將字串格式的分數轉換為Rational對象
    static parseRational(rationalString) {
        const parts = rationalString.split("/");
        if (parts.length !== 2) {
            throw new Error("Invalid rational string");
        }
        return new Rational(parseInt(parts[0]), parseInt(parts[1]));
    }
    // 靜態方法，從兩個數字陣列中解析為Rational
    static _parseRational(numeratorArr, denominatorArr) {
        const numerator = parseInt(numeratorArr.join(""));
        const denominator = parseInt(denominatorArr.join(""));
        return new Rational(numerator, denominator);
    }
    // 輸出分數為字串
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
    // 求最大公因數（GCD）
    gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }
}
exports.Rational = Rational;
