//if you install any library, you need to do a type definition for typescript to be able to recognize that library 

import { faker } from '@faker-js/faker'

export class User{
    name: string
    location: {
        lat: number
        lng: number
    }

constructor(){
    this.name = faker.name.firstName()
    this.location = {
        lat: parseFloat(faker.address.latitude()), //converting string to number
        lng: parseFloat(faker.address.longitude())
    }
}

}