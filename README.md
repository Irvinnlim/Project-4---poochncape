## Project Name & Pitch

# poochncape eCommerce Store 

A full stack eCommerce application built with two applications - an Admin site and a Storefront site. Built with NextJS and MongoDB. 

Admin site with features for admin login with various admin roles, dashboard to view business operations on orders and revenue, products page to upload new, edit and delete products, categories page to create new, edit and delete categories, orders page to view customers' orders, admins page to manage admins and admin roles, settings page to edit featured products and shipping fees.

Store site to view featured product, latest listings, all products and categories. With features to add products to cart, add products to wishlist, add product reviews, search products and payment link via Stripe API. 

https://poochncape-admin.vercel.app/
https://poochncape.vercel.app/

## Technologies Used

- ReactJS
- Next.js
- Node.js
- MongoDB NoSQL database
- NextAuth.js for authentication and authorization

- Styling
    - Tailwind CSS (Admin)
    - Styled Components (Store)
    - Next-Reveal (Store)
    - React SweetAlert2
    - BounceLoader

## Approach to Project

To create an e-commerce app with two separate apps, I adopted a strategic approach that involved developing an admin site and a store site, each with distinct functionalities tailored to their respective roles.

For the admin site, I chose to utilize Next.js, a popular React framework known for its server-side rendering capabilities. This decision allowed me to build a robust and efficient web application. To enhance the user interface and streamline development, I employed Tailwind CSS, a utility-first CSS framework that offers a wide range of pre-built components. This choice allowed me to quickly style and customize the admin site while maintaining consistency across the interface.

To handle data storage and retrieval, I integrated MongoDB, a NoSQL database known for its scalability and flexibility. This database choice allowed me to efficiently manage the admin-related data, including login credentials, order details, revenue statistics, product information, categories, and admin roles. By leveraging MongoDB's document-oriented structure, I could easily organize and manipulate data for the admin site's various features.

For authentication and authorization in the admin site, I incorporated NextAuth.js. Specifically, I used the Google provider provided by NextAuth.js to allow admins to log in using their Google accounts. This integration streamlined the authentication process and provided a secure and familiar login experience for admins. With NextAuth.js handling the authentication flow, I could ensure that only authorized individuals with Google accounts could access the admin site's functionalities.

The admin site's functionality encompassed a comprehensive range of features. Admins could log in using their Google accounts via NextAuth.js and access the dashboard, which provided an overview of essential business operations, displaying order information and revenue statistics. The products page allowed admins to upload, edit, and delete products, facilitating efficient inventory management. The categories page enabled admins to create, modify, and delete product categories, ensuring proper organization. The orders page allowed admins to view customers' orders, streamlining order processing. The admins page facilitated the management of admins and their roles, allowing for smooth administration. Lastly, the settings page allowed admins to edit featured products and adjust shipping fees, giving them control over crucial aspects of the store.

For the store site, I again utilized Next.js due to its excellent server-side rendering capabilities. To handle user authentication, I integrated NextAuth.js with the Google provider. This allowed customers to log in using their Google accounts, providing a seamless and secure authentication experience.

In addition to NextAuth.js, I incorporated styled components, a CSS-in-JS library, to efficiently style the React components of the store site. This approach provided encapsulated styling and promoted code reusability, allowing for a consistent and visually appealing user interface.

Similar to the admin site, the store site utilized MongoDB as the database to ensure data consistency across both applications. This integration allowed for seamless synchronization of product information, customer details, and orders between the admin and store sites. By leveraging MongoDB's flexibility, I efficiently managed and retrieved data to provide customers with accurate and up-to-date information.

To enable secure and convenient online transactions, I integrated the Stripe API, a popular payment gateway. With the Stripe API, customers could securely make purchases using various payment methods, including credit cards, digital wallets, and more. The integration of Stripe ensured a seamless checkout process and instilled confidence in customers regarding the safety of their transactions.

The store site boasted an array of features designed to enhance the shopping experience. Users could view featured products and explore the latest listings, keeping them up to date with the store's offerings. The all products and categories sections provided comprehensive catalogs for easy navigation. The ability to add products to the cart and wishlist allowed customers to save and manage their desired items conveniently. User-generated product reviews fostered a sense of trust and helped potential buyers make informed decisions. The search functionality enabled users to find specific products quickly. With NextAuth.js and the Google provider, customers could create accounts, sign in, and manage their profiles using their Google credentials, ensuring a personalized and engaging shopping experience.

By leveraging Next.js, Tailwind CSS, styled components, NextAuth.js, MongoDB, and the Stripe API, I created a comprehensive e-commerce solution. This approach allowed for efficient development, excellent user experience, secure authentication, robust data management, and seamless payment processing. The integration of NextAuth.js ensured that both the admin and store sites had a reliable and secure authentication system in place, providing a cohesive experience for administrators and customers alike.

## Code Structure
![Screenshot from 2023-05-09 20-18-16](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/4ac3fb6e-13d8-4a72-8430-3e219905862c)

## Admin Site Screenshots

### Dashboard
![Screenshot from 2023-05-09 20-56-29](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/5f3c0973-b3b4-46a5-aca5-e1391c8b5892)

### Products Management Page
![Screenshot from 2023-05-09 20-56-56](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/4304917a-a77f-4938-a4f3-a8703a2fb735)

### Categories Management Page
![Screenshot from 2023-05-09 20-57-05](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/a0807a0f-0942-4823-8c44-e0002fa26ca8)

### Orders Management Page
![Screenshot from 2023-05-09 20-57-12](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/de962d22-8cff-4032-a73d-699d749e6f2a)

### Admins Management Page
![Screenshot from 2023-05-09 20-57-22](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/636ad4d2-7941-4553-9e3d-f486b099fce5)

### Settings Page
![Screenshot from 2023-05-09 20-57-35](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/0375de46-a3ec-43fa-a818-470c7b5f5813)

## Store Site Screenshots

### Home Page
![Screenshot from 2023-05-09 20-58-17](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/b6bd25a5-3c7c-45bc-9417-c353b12354ab)

### Products Page
![Screenshot from 2023-05-09 20-58-26](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/44d29316-3a2f-43bc-8fa0-8c219787d214)

### Categories Page
![Screenshot from 2023-05-09 20-58-40](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/047adb9c-f3e0-4500-b37b-3ebf62ed4ed8)

### Account Page
![Screenshot from 2023-05-09 20-58-49](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/0d67ecce-96d4-4a57-84d2-2dd3853a8878)

### Cart Page
![Screenshot from 2023-05-09 20-59-21](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/ae69b40d-2365-4859-bf8e-c0f0cbe685af)

### Search function
![Screenshot from 2023-05-09 20-59-40](https://github.com/Irvinnlim/Project-4---poochncape/assets/110525418/a313fb10-3911-42bf-9b8b-4298742b912f)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

In the "admin" and "store" directory, you can run in separate terminals:

### Installation:

`npm install`

### To Start Server:

`npm run dev`

### To Run App:
Open [http://localhost:3000](http://localhost:3000) for admin and [http://localhost:3001](http://localhost:3001) for store to view it in your browser.

## User Stories

Admin:

- Log in securely with unique credentials and manage admin roles.
- View a comprehensive dashboard with order and revenue statistics.
- Manage products by uploading, editing, and deleting them.
- Create, modify, and delete categories for effective organization.
- View and manage customers' orders, including tracking statuses.
- Manage other admins and their roles.
- Access a settings page to edit featured products and adjust shipping fees.

User:

- View featured products on the homepage.
- See the latest listings to stay updated on store offerings.
- Browse all products and categories.
- Add products to the cart for purchase.
- Add products to the wishlist for future consideration.
- Read and add product reviews.
- Search for specific products by name, category, etc.
- Make secure payments using the Stripe API for a seamless checkout experience.

Wireframe for the project can be viewed at https://www.figma.com/file/YGEuIAuHaisCHQcdvXpArr/Project-4

## About Me

I am an aspiring software developer and I aim to continualy hone my programming skills inorder to write programs that bring convenience and joy to the everyday life. My GitHub profile can be accessed via https://github.com/Irvinnlim and my portfolio site can be accessed via https://irvinnlim.com
