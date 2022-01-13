import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'kirk-jordon',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Kirk Jordan"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Best Thing`,
                                    spanTitle: 'My Personal Journey to Know God',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    The Best Thing is partly my story but mostly about God's amazing grace. I've been reading and writing my whole life, and providence has compelled me far too long to write a book, so here we are. The book may be crude and raw, but outside Calvary's forgiveness, it's neither worth writing or reading.
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/the-best-thing-kirk-jordan/1139976648?ean=9781648954870',
                                        amazon :'https://www.amazon.ca/Best-Thing-Kirk-Jordan-ebook/dp/B09C22HG3D/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1628695054&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.ca/Best-Thing-Kirk-Jordan/dp/1648954863/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1628695054&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951053',
                                        booksamillion:'https://www.booksamillion.com/p/God-Particle/Rhy-Ronald-P-Rozzi-MS/9781648951053?id=8158356429268',
                                    },
                                    hardcover:{
                                        amazon:'https://www.amazon.com/God-Particle-Personal-Journey-Know/dp/1648951074/ref=sr_1_1?dchild=1&keywords=9781648951077&qid=1594756701&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951077',
                                        booksamillion:'https://www.booksamillion.com/p/God-Particle/Rhy-Ronald-P-Rozzi-MS/9781648951077?id=8158356429268',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;