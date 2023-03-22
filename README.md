# Medicine Ordering Portal Backend
Port :5000
## API created in backend
### 1. Medical Store DataBase
    Endpoint : http://localhost:5000/med
<br>

    Parameters:
        name
        quantity
        expiry date
        purchase date
        description
        price
#### GET Route:
    Description: To get all medicines data to medical store admin 
    

#### POST Route:
    Description: Post a new medicine stock in store database
<br>

### 2. Prescription 

    Endpoint : http://localhost:5000/presc
<br>

    Parameters:
        name
        doctor's name
        email
        med : (array of medicine name)
            name:
            quantity:
        date:
#### POST Route:
    Decription: Create a new prescription and recompute medical store stock according to medicines quantity 

