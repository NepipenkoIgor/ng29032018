import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export const users = [{
  'profileName': 'peter0',
  'firstName': 'Пётр',
  'surname': 'Морозов',
  'country': 'ua'
}, {
  'profileName': 'sergey-pugach2',
  'firstName': 'Сергей',
  'surname': 'Пугач',
  'photo': 'http://i.imgur.com/F4VyrYo.jpg',
  'country': 'by'
}, {
  'profileName': 'ilya78',
  'firstName': 'Илья',
  'surname': 'Трифонов',
  'photo': 'http://i.imgur.com/0DhLKHQ.jpg',
  'country': 'ru'
}, {'profileName': 'darthvitalus', 'firstName': 'Виталий', 'surname': 'Абрамов', 'country': 'ru'}, {
  'profileName': 'aleksey432',
  'firstName': 'Алексей',
  'surname': 'Алексеев',
  'country': 'ru'
}, {'profileName': 'konstantin-eryomin', 'firstName': 'Константин', 'surname': 'Еремин', 'country': 'ru'}, {
  'profileName': 'maryan1',
  'firstName': 'Maryan',
  'surname': 'Kindiy',
  'photo': 'https://i.imgur.com/rAuiPxW.png',
  'country': 'ua'
}, {'profileName': 'vlad4', 'firstName': 'Владимир', 'surname': 'Гаврилов', 'country': 'lv'}, {
  'profileName': 'dmitry85',
  'firstName': 'Dmitry',
  'surname': 'Roganov',
  'country': 'ru'
}, {
  'profileName': 'pavel55',
  'firstName': 'Павел',
  'surname': 'Горохов',
  'photo': 'https://i.imgur.com/DOJX56W.png',
  'country': 'ru'
}, {'profileName': 'vadim49', 'firstName': 'Vadim', 'surname': 'Klimchuk', 'country': 'by'}, {
  'profileName': 'andrii-horda',
  'firstName': 'Андрей',
  'surname': 'Горда',
  'photo': 'https://i.imgur.com/swadQUb.jpg',
  'country': 'ua'
}, {
  'profileName': 'anton-perlov',
  'firstName': 'Антон',
  'surname': 'Перлов',
  'photo': 'https://i.imgur.com/U3A3iPO.jpg',
  'country': 'ru'
}, {'profileName': 'kay', 'firstName': 'Алексей', 'surname': 'Шайков', 'country': 'ru'}, {
  'profileName': 'elena27',
  'firstName': 'Елена',
  'surname': 'Моисеева',
  'country': 'ru'
}];


export const users$ = Observable
  .of(users)
  .delay(3000);
