import "./landing.css";
export function Landing() {
  return (
    <>
      <body>
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
