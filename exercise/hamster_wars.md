Skapa en hamsterwars backend där du kan rösta på vilken hamster som är sötas av två hamstrar.

Varje data entry kommer bestå av ett id, namn, bild-länk och en röstning bestå av röstvinster och förluster.

```json
{
  "id": 0,
  "name": "Cutest hamster ever",
  "ref": "https://some_link_to_the_cutest_hamster_ever.com",
  "votes": [
    {
      "lost": 1,
      "won": 98324
    }
  ]
}
```

Sidan består av två bilder där du kan välja den ena eller den andra som sötast. När en hamster väljs så skickas svaret till servern där datan sparas i en mongodb. 

De endpoints du behöver skapa är:
GET /hamsters - Hämtar alla hamster objekt
POST /hamsters - lägger till en ny hamster med en bild länk och namn
GET /hamsters/:id - Hämtar ett specifikt hamster objekt
GET /hamsters/pair - Hämtar två hamstrar som användaren ska rösta mellan
PUT, PATCH /hamsters/pair/:wonId/:lostId - Sätter in en ny vinst och förlust på respektive hamsters id
DELETE /hamsters/:id - Tar bort ett hamster objekt

## Level up 1
Bygg en enklare frontend där du kan hämta ett par av hamstrar och rösta på dem

## Level up 2
Skapa en till vy där man kan se samtliga hamstrar, lägga till nya och ta bort gamla.

### Level up 3
På fredag kommer vi prata authentisering, efter det kommer du kunna lägga till olika roller för användare samt skapa konton och spara lössenord.