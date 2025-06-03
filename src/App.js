import React, { useState } from 'react';
import './App.css';

function App() {
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rkm0515@gmail.com');
      setCopyMessage('이메일이 복사되었습니다!');
      setTimeout(() => setCopyMessage(''), 2000);
    } catch (err) {
      setCopyMessage('복사에 실패했습니다.');
      setTimeout(() => setCopyMessage(''), 2000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>류기민</h1>
        <p>FrontEnd, BackEnd Developer</p>
        <nav>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#projects">프로젝트</a></li>
            <li><a href="#skills">기술 스택</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about" className="section">
          <h2>소개</h2>
          <p>안녕하세요! 저는 6년 이상의 개발 경험을 보유한 개발자 류기민입니다.</p>
          <p>통계청, 삼성전자, NHN 등 다양한 대기업 프로젝트에서 Vue.js, Spring, Java 등의 기술 스택을 활용하여 시스템 개발 및 유지보수를 수행했습니다.</p>
          <p>특히 서울대학교 학사행정시스템 유지관리 프로젝트에서 시스템 성능 개선과 UI/UX 개선을 통해 사용자 경험을 향상시킨 경험이 있으며, 통계청 프로젝트를 통해 대용량 데이터 처리와 분석 역량을 보유하고 있습니다.</p>
          
          <h3>핵심 역량</h3>
          <ul>
            <li>✨ 프론트엔드 개발: HTML, CSS, JavaScript, Vue.js, Nuxt.js를 활용한 웹 애플리케이션 개발</li>
            <li>⚡ 백엔드 개발: Spring Framework, Java 기반 서버 개발</li>
            <li>💾 데이터베이스: Oracle, SQL을 활용한 데이터 처리 및 최적화</li>
            <li>📊 데이터 분석: SQL과 Procedure를 활용한 통계 데이터 분석 및 보도자료 작성</li>
            <li>🚀 시스템 성능: 대용량 데이터 처리 및 시스템 성능 개선</li>
          </ul>

          <h3>주요 성과</h3>
          <ul>
            <li>🎯 서울대학교 학사행정시스템 성능 개선으로 시스템 가용성 향상 및 장애 발생 횟수 감소</li>
            <li>☁️ 삼성전자 제조 및 업무시스템 신규개발, 고도화</li>
            <li>🔄 NHN 세이클럽 리뉴얼 프로젝트에서 기존 시스템 분석 및 리빌딩 수행</li>
            <li>📈 통계청 기업생멸행정통계 시스템 구축 및 운영을 통한 데이터 정제 및 분석 경험</li>
          </ul>

          <h3>경력사항</h3>
          <ul>
  <li>
    <strong>한국통계정보원</strong>
    <p>📅 2018.06 ~ 2021.09</p>
    <p><span>공공 통계 시스템 운영 및 유지보수, 데이터 연계 처리 업무</span></p>
  </li>
  <li>
    <strong>프리랜서 (웹 개발자)</strong>
    <p>📅 2021.09 ~ 2022.05</p>    
    <p><span>삼성종합기술원 모바일 점검 시스템 개발</span></p>
    <p><span>삼성전자 무선사 변경점 관리시스템 고도화 수행</span></p>
  </li>
  <li>
    <strong>GSITM</strong>
    <p>📅 2022.07 ~ 2022.11</p>
    <p><span>SI 프로젝트 참여(NHN 세이클럽 리뉴얼) - 웹 시스템 구축 및 커스터마이징</span></p>
  </li>
  <li>
    <strong>프리랜서 (웹 개발자)</strong>
    <p>📅 2022.12 ~ 2025.02</p>
    <p><span>삼성 클라우드 플랫폼(SCP)서비스 고도화 수행</span></p>
    <p><span>서울대학교 통합행정 시스템 운영 및 유지관리 수행</span></p>
    <p><span>삼성웰스토리 EHS시스템(환경안전시스템) 구축</span></p>
  </li>
</ul>
        </section>

        <section id="projects" className="section">
          <h2>프로젝트</h2>
          <div className="project-grid">
            <div className="project-card">
                <h3>⚙️ 삼성웰스토리 EHS시스템(환경안전시스템) 구축</h3>
                <p>📅 2025.06.01 ~ 2025.11.30</p>
                <p>🛠️ Vue.js, Spring Framework, PostgreSQL</p>
                <h4>담당 업무</h4>
                <p>BackEnd 개발</p>
            </div>

            <div className="project-card">
              <h3>🎓 서울대학교 학사행정시스템 유지관리</h3>
              <p>📅 2023.02.18 ~ 2025.02.28</p>
              <p>🛠️ MyBuilder, WebSquare, OZReport, Spring, 전자정부 프레임워크, Jenkins, Jennifer</p>
              <h4>담당 업무</h4>
              <ul>
                <li>📋 일반행정(구매, 물품, 재산, 예비군/민방위, 교원인사, 교원 임용, 채용, 증명서발급)</li>
                <li>📚 학사행정(인터넷증명, 학적, 기초교육)</li>
              </ul>
              <h4>업무 성과</h4>
              <ul>
                <li>✅ 시스템 가용성 향상: 기능 장애 발생 횟수 대폭 감소</li>
                <li>⚡ 시스템 성능 개선: 대량 데이터 처리 속도 및 사용자 응답 속도 개선</li>
                <li>🆕 신규 기능 개발: 교원인사, 채용시스템 등 다수의 신규 기능 개발 및 시스템 반영</li>
                <li>🎨 UI/UX 개선: 사용자 만족도 향상 및 업무 처리 시간 단축</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>☁️ 삼성 클라우드 플랫폼(SCP)서비스 고도화</h3>
              <p>📅 2022.12.01 ~ 2023.01.02</p>
              <p>🛠️ Python, Openstack API</p>
              <h4>담당 업무</h4>
              <p>클라우드 플랫폼 환경 구성시 Python을 통한 Openstack API 연계</p>
              <h4>업무 성과</h4>
              <ul>
                <li>🤖 API 연계 자동화: 수동 작업 시간 대폭 감소</li>
                <li>🛡️ 시스템 안정성: API 연계 오류율 감소</li>
                <li>⚡ 운영 효율성: 클라우드 리소스 관리 시간 단축</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>🔄 NHN 세이클럽 리뉴얼</h3>
              <p>📅 2022.07.25 ~ 2022.11.25</p>
              <p>🛠️ Vue.js, Vuetify, Nuxt.js, USTRA framework, Oracle</p>
              <h4>담당 업무</h4>
              <p>기 시스템 분석 후 리빌딩 수행</p>
              <h4>업무 성과</h4>
              <ul>
                <li>⚡ 시스템 성능: 페이지 로딩 속도 개선</li>
                <li>📝 코드 품질: 코드 중복률 감소 및 유지보수성 향상</li>
                <li>📱 사용자 경험: 모바일 사용자 만족도 향상</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>📱 삼성전자(주) 무선사 변경점 관리시스템 고도화</h3>
              <p>📅 2021.12.08 ~ 2022.05.31</p>
              <p>🛠️ HTML5, JSP, JavaScript, Struts Framework, Oracle</p>
              <h4>담당 업무</h4>
              <p>API 개발 및 시스템 고도화</p>
              <h4>업무 성과</h4>
              <ul>
                <li>🔌 API 개발: 다수의 신규 API 개발 및 구현</li>
                <li>🛡️ 시스템 안정성: 장애 발생률 감소</li>
                <li>⚡ 데이터 처리: 대용량 데이터 처리 속도 향상</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>📱 삼성종합기술원 모바일 점검 시스템 개발</h3>
              <p>📅 2021.09.13 ~ 2021.11.30</p>
              <p>🛠️ Vue.js, Spring Framework, Oracle</p>
              <h4>담당 업무</h4>
              <p>관리자 페이지 개발 및 수정</p>
              <h4>업무 성과</h4>
              <ul>
                <li>🔌 관리자 페이지 개발: 관리자 페이지 개발 및 구현</li>
                <li>🛡️ 시스템 안정성: 장애 발생률 감소</li>
                <li>⚡ 데이터 처리: 관리자 페이지 데이터 처리 속도 향상</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>📊 통계청 데이터융복합관리시스템 구축</h3>
              <p>📅 2021.06.21 ~ 2021.09.10</p>
              <h4>담당 업무</h4>
              <p>데이터융복합구축사업 제안작업 수행-PO 역할 수행</p>
              <p>데이터 융복합구축사업 내 데이터 품질관리시스템 구축파트 참여</p>
              <h4>담당 업무</h4>
              <ul>
                <li>✅ PO 수행 : 데이터 융복합관리 시스템 컨소시엄 프로젝트 진행</li>
              </ul>
              <h4>업무 성과</h4>
              <ul>
                <li>⚡ 데이터 융복합관리 시스템 구축 제안 성공 </li>
              </ul>
            </div>

            <div className="project-card">
              <h3>📊 통계청 기업생멸행정통계 종합분석시스템</h3>
              <p>📅 2018.06.20 ~ 2020.12.30</p>
              <p>🛠️ Oracle, Miplatform, Java, SQL</p>
              <h4>담당 업무</h4>
              <ul>
                <li>📈 기업생멸 행정통계 DB구축을 위한 데이터 정제</li>
                <li>📰 통계청 기업생멸행정통계 보도자료 작성</li>
                <li>🔄 기업생멸행정통계 종합분석시스템 운영 및 유지관리</li>
              </ul>
              <h4>업무 성과</h4>
              <ul>
                <li>✅ 데이터 정제: 높은 수준의 데이터 정확도 달성</li>
                <li>📊 보도자료 작성: 정기적인 보도자료 작성 및 제공</li>
                <li>🔄 시스템 운영: 높은 수준의 시스템 가용성 달성</li>
                <li>⚡ 분석 효율성: 통계 데이터 분석 시간 단축</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>기술 스택</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <span>HTML5/CSS3</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
              <span>Vue.js</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" />
              <span>Nuxt.js</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
              <span>Spring</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" alt="Anaconda" />
              <span>Anaconda</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" />
              <span>Oracle</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
              <span>SQL</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg" alt="SVN" />
              <span>SVN</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
              <span>Jenkins</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="WebSquare" />
              <span>WebSquare</span>
            </div>
          </div>

          <h3>기타</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <span>MyBuilder</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>연락처</h2>
          <p>📱 전화번호: 010-6683-1753</p>
          <p>
            📧 이메일: <span className="email-copy" onClick={handleCopyEmail}>rkm0515@gmail.com</span>
            {copyMessage && <span className="copy-message">{copyMessage}</span>}
          </p>
          <p>💻 GitHub: <a href="https://github.com/giminryu" target="_blank" rel="noopener noreferrer">github.com/giminryu</a></p>
          <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/gimin-ryu-97a5b218a/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gimin-ryu-97a5b218a</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 류기민의 포트폴리오. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
