import React, { Component } from 'react'

class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
            {
                key:'all',
                name:'Все',
            },
            {
                key:'armchair',
                name:'Крісла',
            },
            {
                key:'chair',
                name:'Стільчики',
            },
            {
                key:'sofa',
                name:'Диван',
            },
            {
                key:'table',
                name:'Стіл',
            },
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div className='categories__block' key={el.key} onClick={() => this.props.onCategory(el.key)}>
                {el.name}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories;