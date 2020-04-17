import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ArticleItem from '../../components/Articleitem/ArticleItem'
const Article = () =>{
        const [article, setArticle] = useState([])
        
        useEffect(() => {
            axios.get('http://localhost:3004/articles')
                .then(res => setArticle(res.data))
                .catch(err => window.alert(err))
        }, [])
    
        return(

            <div>
                <Container>
                    <Row>
                        {article.map((item, index) => {
                            // console.log(item);
                            
                            return(
                            <ArticleItem key={index} item={item}/>
                            )
                        })}
                    </Row>

                </Container>
            </div>

        )
    
}
export default Article;