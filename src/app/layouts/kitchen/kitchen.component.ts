import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
    kitchens = [
        {
            id: 1,
            title: 'English kitchen',
            description: 'This is a list of prepared dishes characteristic of English cuisine. English cuisine encompasses the cooking styles, traditions and recipes associated with England. It has distinctive attributes of its own, but also shares much with wider British cuisine, partly through the importation of ingredients and ideas from North America, China, and India during the time of the British Empire and as a result of post-war immigration.Ingredients that might be used to prepare these dishes, such as English vegetables, cuts of meat, or cheeses do not themselves form part of this list.',
            image:  'assets/image/kitchens/english-breakfast.jpg',
        },
        {
            id: 2,
            title :  'Italian kitchen',
            description:  'Italian cuisine is food typical from Italy. It has developed through centuries of social and economic changes, with roots stretching to antiquity.Significant changes occurred with the discovery of the New World and the introduction of potatoes, tomatoes, bell peppers, maize and sugar beet, this last introduced in quantity in the 18th century. Italian cuisine is known for its regional diversity, especially between the north and the south of the Italian peninsula. It offers an abundance of taste, and is one of the most popular and copied in the world. It influenced several cuisines around the world chiefly that of the United States.Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation. Ingredients and dishes vary by region. Many dishes that were once regional, have proliferated with variations throughout the country.',
            image:  'assets/image/kitchens/italian-food.jpg'
        },
        {
            id: 3,
            title :  'French kitchen',
            description:  'French cuisine consists of the cooking traditions and practices from France. In the 14th century Guillaume Tirel, a court chef known as "Taillevent", wrote Le Viandier, one of the earliest recipe collections of medieval France. During that time, French cuisine was heavily influenced by Italian cuisine. In the 17th century, chefs François Pierre La Varenne and Marie-Antoine Carême spearheaded movements that shifted French cooking away from its foreign influences and developed France\'s own indigenous style. Cheese and wine are a major part of the cuisine. They play different roles regionally and nationally, with many variations and appellation d\'origine contrôlée (AOC) (regulated appellation) laws. French cuisine was codified in the 20th century by Auguste Escoffier to become the modern haute cuisine; Escoffier, however, left out much of the local culinary character to be found in the regions of France and was considered difficult to execute by home cooks. Gastro-tourism and the Guide Michelin helped to acquaint people with the rich bourgeois and peasant cuisine of the French countryside starting in the 20th century. Gascon cuisine has also had great influence over the cuisine in the southwest of France. Many dishes that were once regional have proliferated in variations across the country. Knowledge of French cooking has contributed significantly to Western cuisines. Its criteria are used widely in Western cookery school boards and culinary education. In November 2010, French gastronomy was added by the UNESCO to its lists of the world\'s "intangible cultural heritage"',
            image:  'assets/image/kitchens/french-breakfast.jpg'
        },
        {
            id: 4,
            title:  'Spanish food',
            description:  'Spanish cuisine is heavily influenced by regional cuisines and the particular historical processes that shaped culture and society in those territories. Geography and climate had great influence on cooking methods and available ingredients, and these particularities are still present in the gastronomy of the various regions that make up the country. Spanish cuisine derives from a complex history, where invasions of the country and conquests of new territories modified traditions and made new ingredients available.',
            image:  'assets/image/kitchens/spanish-food.jpg'
        },
        {
            id: 5,
            title:  'Greek food',
            description:  'Greek cuisine (Greek: Ελληνική κουζίνα, Elliniki kouzina) is a Mediterranean cuisine. Contemporary Greek cookery makes wide use of vegetables, olive oil, grains, fish, wine (white and red), and meat (including lamb, poultry, veal, beef, rabbit and pork). Other important ingredients include olives, cheese, lemon juice, herbs, bread and yoghurt. The most commonly used grain is wheat; barley is also used. Common dessert ingredients include nuts, honey, fruits, and filo pastry. It is strongly influenced by Ottoman cuisine and thus shares foods such as baklava, tzatziki, gyro, moussaka, dolmades, yuvarlakia and keftethes with the neighboring countries.',
            image:  'assets/image/kitchens/greek-food.jpg'
        },
        {
            id: 6,
            title:  'German food',
            description:  'The cuisine of Germany has evolved as a national cuisine through centuries of social and political change with variations from region to region. Some regions of Germany, like Bavaria and neighbouring Swabia, share dishes with Austrian and parts of Swiss cuisine. The Michelin Guide of 2015 awarded eleven restaurants in Germany three stars, the highest designation, while 38 more received two stars and 233 one star. German restaurants have become the world\'s second-most decorated after France.',
            image:  'assets/image/kitchens/german-breakfast.jpg'
        }
    ];
    id  =  '';
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

  ngOnInit() {
  }

}
