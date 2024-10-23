export class Rational {
    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
      }
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    // 化為最簡分數
    normalize(): Rational {
      const gcd = this.gcd(this.numerator, this.denominator);
      return new Rational(this.numerator / gcd, this.denominator / gcd);
    }
  
    // 檢測Rational物件是否相等
    equals(other: Rational): boolean {
      const r1 = this.normalize();
      const r2 = other.normalize();
      return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }
  
    // 是否為整數
    isWhole(): boolean {
      return this.numerator % this.denominator === 0;
    }
  
    // 是否為小數
    isDecimal(): boolean {
      return !this.isWhole();
    }
  
    
    static parseRational(rationalString: string): Rational {
      const parts = rationalString.split("/");
      if (parts.length !== 2) {
        throw new Error("Invalid rational string");
      }
      return new Rational(parseInt(parts[0]), parseInt(parts[1]));
    }
  
    
    static _parseRational(numeratorArr: string[], denominatorArr: string[]): Rational {
      const numerator = parseInt(numeratorArr.join(""));
      const denominator = parseInt(denominatorArr.join(""));
      return new Rational(numerator, denominator);
    }
  
   
    toString(): string {
      return `${this.numerator}/${this.denominator}`;
    }
  
    
    private gcd(a: number, b: number): number {
      if (b === 0) {
        return a;
      }
      return this.gcd(b, a % b);
    }
  }
