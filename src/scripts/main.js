'use strict';

// write code here

const list = document.querySelector('ul');
const items = [...list.querySelectorAll('li')];

const getSalary = li => parseInt(li.dataset.salary.replace(/[,$]/, ''));

items.sort((a, b) => {
  return -(getSalary(a) - getSalary(b));
});

list.append(...items);
