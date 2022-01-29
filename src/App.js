import './App.css';
import React, {Component} from 'react';
import Comentario from './components/Comentario';
import './components/Formulario.css'

class App extends Component{

state = {
    comentarios:[{
        nome: "João",
        email: "joao@gmail.com",
        date: new Date(),
        mensagem: "Olá!"
    },

    {   
        nome: "Maria",
        email: "maria@gmail.com",
        date: new Date(),
        mensagem: "Olá,td bem?"
    }   
],
novoComentario:{
    nome:'',
    email: '',
    mensagem:'',
    date:new Date()
}
}
adicionarComentario = event =>{
    event.preventDefault(); //anula evento post para inserir comentário
    const novo_comentario = {...this.state.novoComentario,data: new Date()}


  

    //configura o state e acrescenta o novo comentario à lista comentários
    this.setState({comentarios:
            [...this.state.comentarios, novo_comentario],    novoComentario: {nome:'', email:'', mensagem:''}

    });
}

removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
    
}

digitado = evento =>{
    const { name, value } = evento.target;
    
    this.setState({novoComentario:{...this.state.novoComentario,[name]:value}})
    console.log(name)
    return value;
}


render() {
    return (
        <div className="App" id="inicio">

            <h1>Comentários</h1>

            {this.state.comentarios.map((comentario, index)=>(
                    //index vem o valor do index
                    <Comentario 
                                key={index} 
                                name={comentario.nome} 
                                email={comentario.email} 
                                data={comentario.date}
                                onRemove={this.removerComentario.bind(this, comentario)}>                                

                                {comentario.mensagem}
                    </Comentario>
            ))}

        <section>   
            <form method="post"  onSubmit={this.adicionarComentario}>
                <h2>Adicionar Comentário</h2>
                <div>
                    <input 
                    type="text" 
                    value={this.state.novoComentario.nome}
                    onChange={this.digitado}
                    required
                    name="nome"
                    placeholder='Digite seu nome'/>
                </div>
                <div>
                    <input 
                    type="text" 
                    name="email" 
                    required
                    value={this.state.novoComentario.email}
                    onChange={this.digitado}
                    placeholder='Digite seu email'/>
                </div>
                <div>
                    <textarea 
                    rows="4" 
                    required
                    value={this.state.novoComentario.mensagem}
                    onChange={this.digitado}
                    name="mensagem"/>
                </div>
                    <button type='submit'>Comentar</button>
            </form>
        </section>

     
        </div>
        );
    }
}
    
export default App;