import "./Main.css";

function Main() {
  return (
    <div clasName="App">
      <div className="ss">
          <a href = ""><img src="./img/logo3.png" ></img></a> 
      </div>
      <div>
        <br/><br/><br/><br/>
        <div className="bbb">
        <div><p className="mtext">카페 종류</p></div>
        <form className="log">
          <input type="id" placeholder=" 아이디 " />
          <input type="password" placeholder="비밀번호" />
          <button formAction="">로그인</button>
          <button formAction="">회원가입</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
