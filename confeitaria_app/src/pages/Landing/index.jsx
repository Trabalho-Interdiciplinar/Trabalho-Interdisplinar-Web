import "./landing.css";
export function Landing() {
  return (
    <>
      <div className="container-page">
        <div className="container-page-content">
          <div className="title">sweet connection</div>
          <div className="clientes">
            <div className="cliente">
              <p>
                Para clientes, o Sweet Connection é o lugar perfeito para
                descobrir e pedir os melhores doces artesanais da sua região.
                Navegue por uma variedade de bolos, tortas, doces e outras
                delícias feitas com carinho pelos confeiteiros locais. Com
                alguns cliques, você pode fazer seu pedido e aproveitar essas
                gostosuras no conforto da sua casa.
              </p>
              <button className="btn"><a href="verlojas">ver lojas</a></button>
            </div>
            <div className="cliente-sc">
              <p>
                Para confeiteiros, o Sweet Connection é a oportunidade ideal
                para expandir seu negócio. Crie sua loja virtual, mostre seus
                produtos e alcance mais clientes apaixonados por doces. Nossa
                plataforma facilita a gestão de pedidos e ajuda você a crescer e
                prosperar.
              </p>
              <button className="btn"><a href="loja/login">login</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
