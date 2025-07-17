import React, { useState } from "react";

// 3자리마다 콤마
function numberWithCommas(x) {
    if (!x) return '';
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 입력값에서 콤마 제거 후 숫자로 변환
function parseNumber(str) {
    if (!str) return 0;
    return Number(str.replace(/,/g, ""));
}

// 월보수액 소수점 절사 함수
function cutToWon(n) {
    return Math.floor(n);
}

// 고용보험료 (10원 미만 절삭)
function getEmploymentInsurance(wage) {
    let pure = Math.floor(wage * 0.016 * 0.5);
    return Math.floor(pure / 10) * 10;
}

// 산재보험료 (구체적 명세서 방식)
function getAccidentInsurance(wage) {
    let pure = wage * 0.0056 * 0.5;
    pure = Math.ceil(pure / 10) * 10; // 10원 미만 올림!
    return pure + 1000;
}


export default function SoftwareEngineerNetPayCalculator() {
    const [feeText, setFeeText] = useState('');
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const val = e.target.value.replace(/,/g, "");
        if (val && !/^\d*$/.test(val)) return; // 숫자만 입력 허용

        setFeeText(numberWithCommas(val));
        if (!val) {
            setResult(null);
            return;
        }

        const numFee = Number(val);
        const wage = cutToWon(numFee * 0.843);
        const incomeTax = cutToWon(numFee * 0.03);
        const localTax = cutToWon(incomeTax * 0.1);
        const employmentInsurance = getEmploymentInsurance(wage);
        const accidentInsurance = getAccidentInsurance(wage);

        const totalDeduct = incomeTax + localTax + employmentInsurance + accidentInsurance;
        const actualPay = numFee - totalDeduct;

        setResult({
            wage: wage.toLocaleString(),
            incomeTax: incomeTax.toLocaleString(),
            localTax: localTax.toLocaleString(),
            employmentInsurance: employmentInsurance.toLocaleString(),
            accidentInsurance: accidentInsurance.toLocaleString(),
            totalDeduct: totalDeduct.toLocaleString(),
            actualPay: actualPay.toLocaleString(),
        });
    };

    return (
        <div style={{marginTop:"2rem", padding:"1.5rem", border:"1px solid #aaa", borderRadius:"10px", maxWidth:"440px"}}>
            <h3>소프트웨어 기술자 실수령액 계산기</h3>
            <input
                type="text"
                placeholder="용역비(계약금액)를 입력하세요"
                value={feeText}
                onChange={handleChange}
                style={{width: "80%", padding: "0.6rem"}}
                inputMode="numeric"
            />
            {result && (
                <div style={{marginTop:"1.2rem", fontSize:"1.08rem"}}>
                    <div>월 보수액(=용역비×0.843): <strong>{result.wage}원</strong></div>
                    <div>소득세: <strong>{result.incomeTax}원</strong></div>
                    <div>지방소득세: <strong>{result.localTax}원</strong></div>
                    <div>고용보험료: <strong>{result.employmentInsurance}원</strong></div>
                    <div>산재보험료(부가금 포함): <strong>{result.accidentInsurance}원</strong></div>
                    <hr />
                    <div><strong>총 공제액: {result.totalDeduct}원</strong></div>
                    <div><strong style={{color:"#1750dd"}}>실수령액: {result.actualPay}원</strong></div>
                    <div style={{fontSize:'0.94rem', color:'#888', marginTop:'0.4rem'}}>
                        소프트웨어 기술자 대상의 실수령액입니다.
                    </div>
                    <div style={{fontSize:'0.94rem', color:'#888', marginTop:'0.4rem'}}>
                        산재보험과 고용보험은 2022년 7월부터 의무 가입대상입니다. 사업주와 프리랜서가 각각 50%씩 부담합니다.
                    </div>
                    <div style={{fontSize:'0.94rem', color:'#888', marginTop:'0.4rem'}}>
                        (실제 보험공단 산정식: 원 미만 절사 · 10원 미만 버림 · 산재보험 부가금 포함)
                    </div>
                </div>
            )}
        </div>
    );
}