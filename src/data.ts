export const data = {
  banners: [
    { img: '/assets/banners/banner-1.png', link: '' },
    { img: '/assets/banners/banner-2.png', link: '' },
    { img: '/assets/banners/banner-3.png', link: '' },
    { img: '/assets/banners/banner-4.png', link: '' },
  ],
  products: [
    { id: 1, label: 'Camisa PHP', price: 49.90, image: '/assets/products/camiseta-php.png', link: '' },
    { id: 2, label: 'Camisa Laravel', price: 39.90, image: '/assets/products/camiseta-laravel-azul.png', link: '' },
    { id: 3, label: 'Camisa Node', price: 29.90, image: '/assets/products/camiseta-node.png', link: '' },
    { id: 4, label: 'Camisa React', price: 19.90, image: '/assets/products/camiseta-react-azul.png', link: '' },
    { id: 5, label: 'Camisa Docker', price: 19.90, image: '/assets/products/camisa-docker.png', link: '' },
  ]
}

export const mockCartItems = [
  { productId: 5, quantity: 1 }, // Boné 87Web - Preto
  { productId: 3, quantity: 1 }, // Camisa Node
  { productId: 2, quantity: 1 }, // Camisa Laravel
  { productId: 6, quantity: 1 }, // Boné 87Web - Cinza
]