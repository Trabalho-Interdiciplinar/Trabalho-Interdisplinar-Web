import "./landing.css";
export function Landing() {
  return (
    <>
      <div className="container-page">
        <div className="container-page-content">
          <div className="clientes">
            <div className="cliente">
              <p>
                Para clientes, o Sweet Connection é seu destino definitivo para
                descobrir e saborear as melhores delícias artesanais da sua
                região. Navegue por uma variedade irresistível de doces, bolos,
                tortas e outras guloseimas feitas com amor e dedicação pelos
                melhores confeiteiros locais. Com apenas alguns cliques, você
                pode explorar cardápios, fazer pedidos e desfrutar de
                experiências culinárias que vão adoçar o seu dia. Aproveite a
                conveniência de ter as confeitarias mais renomadas ao seu
                alcance e satisfaça seus desejos por doces de forma rápida e
                prática.
              </p>
              <button>ver lojas</button>
            </div>
            <div className="cliente-sc">
              <p>
                Para confeiteiros e produtores, o Sweet Connection é a
                plataforma perfeita para expandir seu negócio e alcançar novos
                clientes apaixonados por doces. Aqui, você pode criar sua loja
                virtual, exibir seus produtos mais deliciosos e gerenciar seus
                pedidos com facilidade. Conecte-se com uma comunidade de amantes
                da confeitaria, aumente sua visibilidade e faça seu negócio
                crescer. Estamos comprometidos em oferecer a você todas as
                ferramentas necessárias para o sucesso, desde a criação do seu
                perfil até a gestão de entregas e pagamentos.
              </p>
              <button>login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
