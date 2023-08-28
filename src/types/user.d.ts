  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  interface Location {
    lat: string;
    lng: string;
  }

  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Location
  }

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company
  }