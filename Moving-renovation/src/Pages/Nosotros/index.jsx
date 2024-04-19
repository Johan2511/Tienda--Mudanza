import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AboutPage = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <div className="bg-orange-200">
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">Nosotros</h1>

            {/* Información sobre el equipo */}
            <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg">
                Somos un equipo apasionado y dedicado de profesionales comprometidos con brindar el mejor servicio a nuestros clientes. Con una amplia experiencia en la industria, estamos aquí para ayudarte en cada paso del camino.
            </p>
            </section>

            {/* Quiénes somos */}
            <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-lg">
                Somos una empresa dedicada a proporcionar soluciones de mudanzas confiables y eficientes para nuestros clientes. Con años de experiencia en el sector, nos esforzamos por brindar un servicio excepcional que supere las expectativas de nuestros clientes.
            </p>
            </section>

            {/* Misión y Visión */}
            <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Misión y Visión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-2">Misión</h3>
                <p className="text-lg">
                    Nuestra misión es proporcionar un servicio de mudanzas seguro, confiable y sin problemas, superando las expectativas de nuestros clientes en cada proyecto.
                </p>
                </div>
                <div>
                <h3 className="text-xl font-semibold mb-2">Visión</h3>
                <p className="text-lg">
                    Nos esforzamos por ser reconocidos como líderes en la industria de mudanzas, brindando servicios innovadores y de alta calidad que establezcan un estándar de excelencia en el sector.
                </p>
                </div>
            </div>
            </section>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default AboutPage;
