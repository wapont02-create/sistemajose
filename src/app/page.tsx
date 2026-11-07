import ClientMenu from '@/components/ClientMenu';
import { Database } from '@sqlitecloud/drivers';

// Forzar que esta página sea dinámica y consulte la base de datos en tiempo real
export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const connectionString = process.env.DATABASE_URL || process.env.SQLITECLOUD_CONNECTION_STRING;
    
    if (!connectionString) {
      console.error('Falta la cadena de conexión en las variables de entorno de Vercel');
      return [];
    }

    const db = new Database(connectionString);
    // Consultamos los productos de la base de datos
    const result: any = await db.sql('SELECT id, name, description, price_usd, category, image_url FROM products;');
    
    if (Array.isArray(result)) return result;
    if (result && Array.isArray(result.rows)) return result.rows;
    if (result && typeof result === 'object') {
      const values = Object.values(result);
      if (Array.isArray(values[0])) return values[0];
      return values;
    }

    return [];
  } catch (error) {
    console.error('Error al conectar con SQLite Cloud:', error);
    return [];
  }
}

export default async function MinimarketPage() {
  const products = await getProducts();

  const categoriesMap: { [key: string]: any[] } = {};
  
  if (Array.isArray(products) && products.length > 0) {
    products.forEach((prod: any) => {
      if (!prod || !prod.name) return;
      
      // Categoría por defecto orientada a minimarket si viene vacía
      const cat = prod.category || 'VÍVERES Y ABASTO';
      if (!categoriesMap[cat]) {
        categoriesMap[cat] = [];
      }
      categoriesMap[cat].push({
        id: prod.id || Math.random(),
        name: prod.name,
        description: prod.description || '',
        price: prod.price_usd ? Number(prod.price_usd) : 0,
        image: prod.image_url || ''
      });
    });
  }

  const menuCategories = Object.keys(categoriesMap).map(cat => ({
    category: cat,
    items: categoriesMap[cat]
  }));

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-white pb-24">
      {/* Cabecera / Banner superior opcional para Minimarket */}
      <header className="w-full bg-[#1e293b] border-b border-slate-800 py-4 px-6 shadow-md mb-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-wider text-emerald-400">🛒 MINIMARKET</span>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">
              Abierto / Catálogo Online
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Encuentra los mejores productos al mejor precio
          </p>
        </div>
      </header>

      {/* Contenedor principal del catálogo / productos */}
      <div className="flex-1 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <ClientMenu initialCategories={menuCategories} />
      </div>
    </main>
  );
}
```[cite: 3]
