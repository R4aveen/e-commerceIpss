
import Subheader from "@/components/layout/Subheader/Subheader";
import Container from "@/components/layout/Container/Container";
import Card, { CardBody, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button/Button";
import { useGetProducts } from "@/store/services/productHome";

const HomePage = () => {

  const { data, isError, isLoading, refetch } = useGetProducts();

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error al cargar productos</div>
  // console.log(data);

  return (
    <>
      <Subheader>
        <div>
          <h1>Home</h1>
          <p>Pagina principal de la aplicacion</p>
        </div>
      </Subheader>
      <Container>
        <section className="mb-5">
          <h2 className="mb-4 text-start text-black fw-bold">LOS MÁS NUEVO</h2>
          <div className="row g-4">
            {/* {console.log(data?.products)} */}
            {data?.products.map((product) => (
              <div className="col-12 col-md-4" key={product.id}>
                <Card className="h-100">
                  <CardHeader>
                    <span className="badge bg-primary">Nuevo</span>
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex flex-column gap-2">
                      <img src={product.images[0].src} alt={product.images[0].alt} className="w-100" />
                      <CardTitle>{product.title}</CardTitle>
                      <p className="text-muted small">{product.type}</p>
                      <h4 className="fw-bold mt-3 text-primary">{product.price}</h4>
                    </div>
                  </CardBody>
                  <CardFooter className="d-flex justify-content-between align-items-center">
                    <Button variant="outline" size="sm">Detalles</Button>
                    <Button variant="solid" size="sm">Comprar</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
