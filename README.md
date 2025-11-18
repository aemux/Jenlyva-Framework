# 🚀 Jenlyva Framework

Jenlyva es un framework modular, seguro y escalable diseñado para aplicaciones
basadas en **Electron + Node.js**, como launchers, aplicaciones de escritorio,
sistemas de actualización y entornos que requieren seguridad.

Inspirado en arquitecturas profesionales como **Ankama Cryptus**, pero creado
para ser totalmente libre, entendible y reutilizable.

---

## ✨ Características
- Loader dinámico de módulos.
- Cifrado AES/RSA integrado.
- Verificación de integridad (SHA-256).
- API bridge segura para Electron.
- Sistema de actualizaciones verificadas.
- SDK listo para usar en otros proyectos.
- Arquitectura escalable y totalmente modular.

---

## 📁 Estructura del proyecto

Jenlyva/
├── core/ → Seguridad + Loader
├── modules/ → Módulos oficiales
├── runtime/ → Entorno + plugin loader
├── sdk/ → SDK para otros proyectos
├── tests/ → Test de módulos
├── index.js → Entrada principal
└── package.json
