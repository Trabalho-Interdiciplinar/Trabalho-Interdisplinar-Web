import "./landing.css";
export function Landing() {
  return (
    <>
      <body>
        <main>
          <div className="rowLading aux">
            <div className="textLading">
              <p className="title">Olá, bem vindo ao nosso sistema Sweet-Connection.</p>
              <p className="textLading">
                Uma solução criada para micro-empresas com a finalidade de ajula-los a irem mais longe com suas vendas e
                crescer seu negocio de uma forma mais sistematizada e tecnologica.
                Se ainda nao faz parte do nosso time de associados, venha se assosiar com o melhor site para
                confeitarias!
              </p>
            </div>
            <div className="loginLading">
              <a href="loja/login" className="butonLading" >
                COMEÇAR
              </a>
            </div>
          </div>
          <div className="rowLading">
            <div className="carrossel"></div>
          </div>
          <div className="rowLading cards">
            <div className="cardLading comments">
              <div className="feedback">Feedback</div>
              <div className="perfilLading"></div>
              <div className="comment"> Produtos de excelentes qualidades, ótimo atendimento e atenção com o cliente. AMEII!!</div>
            </div>
          </div>
          <div className="rowLading">
            <img className="deliveryFlow" src="/src/img/flow_lading.png" alt="" />
          </div>
        </main>
        <div className="navbar">
          <h1 className="logo">SWEET CONNECTION</h1>
          <p className="login"><a href="loja/login">LOGIN</a></p>
          <p className="login"><a href="verlojas">VER LOJAS</a></p>
        </div>
        <div className="content">
          <p>Olá, bem vindo ao nosso sistema Sweet-Connection. 
            Uma solução criada para micro-empresas com a finalidade de ajula-los a irem mais longe com suas vendas e crescer seu negocio de uma forma mais sistematizada e tecnologica.
            Se ainda nao faz parte do nosso time de associados, venha se assosiar com o melhor site para confeitarias!
          </p>
        </div>
        <footer>

        </footer>
      </body>
    </>
  );
}
