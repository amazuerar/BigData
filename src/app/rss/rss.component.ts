import { Component, OnInit } from '@angular/core';
import { RssService } from '../provider/rss.service';
import { RegexTitlePipe } from '../pipe/regex-title.pipe';
import { RegexCategoryPipe } from '../pipe/regex-category.pipe';

/**
 * Componente que contiene todo lo relacionado a la visualización y procesamiento del modulo de suscripción a RSS
 * @export
 * @class RssComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {


  /**
   * Atributo para definir el arreglo de RSS de Wired
   * @memberof RssComponent
   */
  rssWired = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de 
   * @memberof RssComponent
   */
  rssWiredLen;

  /**
   * Atributo para definir el arreglo de RSS de lifehacker
   * @memberof RssComponent
   */
  rssLifeH = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de lifehacker
   * @memberof RssComponent
   */
  rssLifeHLen;

  /**
   * Atributo para definir el arreglo de RSS de BBC
   * @memberof RssComponent
   */
  rssBbc = [];

  /**
   * Atributo para definir la longitud del arreglo de RSS de lifehacker
   * @memberof RssComponent
   */
  rssBbcLen;


  /**
    * Atributo para definir el arreglo de RSS de Wired con Regex
    * @memberof RssComponent
    */
  rssWiredRegex = [];

  /**
    * Atributo para definir la longitud del arreglo de RSS de Wired con Regex
    * @memberof RssComponent
    */
  rssWiredRegexLen;

  /**
   * Atributo para definir el arreglo de RSS de lifehacker con Regex
   * @memberof RssComponent
   */
  rssLifeHRegex = [];

  /**
   * Atributo para definir la longitud del arreglo de RSS de lifehacker con Regex
   * @memberof RssComponent
   */
  rssLifeHRegexLen;

  /**
   * Atributo para definir el arreglo de RSS de BBC con Regex
   * @memberof RssComponent
   */
  rssBbcRegex = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de BBC con Regex
   * @memberof RssComponent
   */
  rssBbcRegexLen;


  /**
   * Atributo para definir el arreglo de RSS de Wired con Xquery
   * @memberof RssComponent
   */
  rssWiredXQ = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de Wired con Xquery
   * @memberof RssComponent
   */
  rssWiredXQLen;

  /**
   * Atributo para definir el arreglo de RSS de Lifehacker con Xquery
   * @memberof RssComponent
   */
  rssLifeHXQ = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de lifehacker con Xquery
   * @memberof RssComponent
   */
  rssLifeHXQLen;

  /**
   * Atributo para definir el arreglo de RSS de WIred con Xquery
   * @memberof RssComponent
   */
  rssBbcXQ = [];

  /**
   * Atributo para definir la longirud del arreglo de RSS de BBC con Xquery
   * @memberof RssComponent
   */
  rssBbcXQLen;

  /**
   * Parametro para contener el atributo a ser filtrado en el titulo
   * @memberof RssComponent
   */
  title = "";

  /**
   * Parametro para contener el atributo a ser filtrado en la descripcion
   * @memberof RssComponent
   */
  description = "";

  /**
   * Parametro para contener el atributo a ser filtrado en la categoria
   * @memberof RssComponent
   */
  category = "";

  /**
   * Crea una instancia del componente RssComponent.
   * @param {RegexCategoryPipe} pipeRegexCat la Pipe para aplicar expresiones regulares en la categorias
   * @param {RegexTitlePipe} pipeRegex la Pipe para aplicar expresiones regulares en titulo y descripcion
   * @param {RssService} rss el servicio que trae los metodos para obtener la informacion desde el servidor
   * @memberof RssComponent
   */
  constructor(private pipeRegexCat: RegexCategoryPipe, private pipeRegex: RegexTitlePipe, private rss: RssService) { }

  /**
   * Metodo que se ejecuta al inicializar el componente
   * Se encarga de cargar la información inicial y poblar los arreglos iniciales con los RSS
   * @memberof RssComponent
   */
  ngOnInit() {
    this.rss.getRssWired().then(rss => { this.rssWired = rss; this.rssWiredLen = this.rssWired.length });
    this.rss.getRssWired().then(rss => { this.rssWiredRegex = rss; this.rssWiredRegexLen = this.rssWiredRegex.length });
    this.rss.getRssWired().then(rss => { this.rssWiredXQ = rss; this.rssWiredXQLen = this.rssWiredXQ.length });

    this.rss.getRssBbc().then(rss => { this.rssBbc = rss; this.rssBbcLen = this.rssBbc.length });
    this.rss.getRssBbc().then(rss => { this.rssBbcRegex = rss; this.rssBbcRegexLen = this.rssBbcRegex.length });
    this.rss.getRssBbc().then(rss => { this.rssBbcXQ = rss; this.rssBbcXQLen = this.rssBbcXQ.length });

    this.rss.getRssLf().then(rss => { this.rssLifeH = rss; this.rssLifeHLen = this.rssLifeH.length });
    this.rss.getRssLf().then(rss => { this.rssLifeHRegex = rss; this.rssLifeHRegexLen = this.rssLifeHRegex.length });
    this.rss.getRssLf().then(rss => { this.rssLifeHXQ = rss; this.rssLifeHXQLen = this.rssLifeHXQ.length });


  }

  /**
   * Metodo que se encarga de aplicar los filtros ya sea por RegExp o Xquery, llamado a las respecivas acciones
   * Si el usuario no diligencio los componentes para filtrar aparecera un mensaje advirtiendo la situacion 
   * y se recarga nuevamente los arreglos iniciales
   * @memberof RssComponent
   */
  filter() {

    let wired = this.rssWired;
    let lifeh = this.rssLifeH;
    let bbc = this.rssBbc;

    if (this.title.trim() === "" && this.description.trim() === "" && this.category.trim() === "") {
      alert("Debe escribir algún parámetro de búsqueda");
      this.clean();
    }
    else {

      // REGEX
      this.rssWiredRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(wired, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);
      this.rssLifeHRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(lifeh, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);
      this.rssBbcRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(bbc, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);

      this.rssWiredRegexLen = this.rssWiredRegex.length
      this.rssLifeHRegexLen = this.rssLifeHRegex.length
      this.rssBbcRegexLen = this.rssBbcRegex.length

      // XQuery (Elementree)
      this.rss.getRssWiredXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssWiredXQ = [];
            this.rssWiredXQ.push(newRss);
          }
          else {
            this.rssWiredXQ = newRss;
          }
          this.rssWiredXQLen = this.rssWiredXQ.length;

        })
        .then(undefined, (error) => { this.rssWiredXQ.length = 0; this.rssWiredXQLen = this.rssWiredXQ.length; });

      this.rss.getRssLfXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssLifeHXQ = [];
            this.rssLifeHXQ.push(newRss);
          }
          else {
            this.rssLifeHXQ = newRss;
          }
          this.rssLifeHXQLen = this.rssLifeHXQ.length;
        })
        .then(undefined, (error) => { this.rssLifeHXQ.length = 0; this.rssLifeHXQLen = this.rssLifeHXQ.length; });

      this.rss.getRssBbcXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssBbcXQ = [];
            this.rssBbcXQ.push(newRss);
          }
          else {
            this.rssBbcXQ = newRss;
          }
          this.rssBbcXQLen = this.rssBbcXQ.length;

        })
        .then(undefined, (error) => { this.rssBbcXQ.length = 0; this.rssBbcXQLen = this.rssBbcXQ.length });




    }


  }

  /**
   * Metodo encargado de limpiar los filtros y poblar los arreglos iniciales con la informacion original de los RSS sin filtrar
   * @memberof RssComponent
   */
  clean() {
    this.title = "";
    this.description = "";
    this.category = "";
    this.ngOnInit();
  }


}
