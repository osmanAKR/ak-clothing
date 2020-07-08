import React from'react'

import './preview-collection.styles.scss'

import CollectionItem from '../collection-item/cooection-item.component'

const PreviewCollection = ({ title, items }) =>(
   <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
         {  
            items.filter((item,idx) => idx < 4 )
            .map(({ id,...otherItemprops}) => (
              <CollectionItem key={id} {...otherItemprops} />  
            ))
         }      
        </div>
   </div> 
)

export default PreviewCollection