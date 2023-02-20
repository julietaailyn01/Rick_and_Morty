import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   return (
   <div>
      {characters.map((r) => 
         <Card key = {r.id} name = {r.name} species = {r.species} gender = {r.gender} image = {r.image} />
      )}
   </div>
   )
}
