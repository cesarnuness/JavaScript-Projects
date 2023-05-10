import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkupButton(prevOrNext) {
    return `<button data-goto="${
      prevOrNext === 'prev'
        ? this._data.currentPage - 1
        : this._data.currentPage + 1
    }" class="btn--inline pagination__btn--${prevOrNext}">
            <span>Page ${
              prevOrNext === 'prev'
                ? this._data.currentPage - 1
                : this._data.currentPage + 1
            }</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-${
      prevOrNext === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
        </button>`;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (this._data.currentPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next');
    }
    // Last page
    if (this._data.currentPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev');
    }
    // Other page
    if (this._data.currentPage < numPages) {
      return (
        this._generateMarkupButton('prev') + this._generateMarkupButton('next')
      );
    }
    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
