import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  url = 'http://localhost:5000/api/v1/houses';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {

    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  }
  
 

  submitApplication(firstName: string, lastName: string, email: string) {
    
    console.log(`Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
