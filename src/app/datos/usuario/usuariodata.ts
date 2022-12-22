import { BehaviorSubject, Observable } from "rxjs";

class UsuarioData{
    
    private usuario: BehaviorSubject<IUsuario>=new BehaviorSubject({login:false} as IUsuario);

    public iniciarSesion( usuario:IUsuario) {
        this.usuario.next(usuario)
    };

    public getUsuario():IUsuario{
        return this.usuario.value
    }

    public getUsuarioObserver():Observable<IUsuario>{
        return this.usuario.asObservable()
    }

    public cerrarsesion(){
        this.usuario.next({login:false} as IUsuario);
    }
};

export default new UsuarioData()

interface IUsuario {
    nombres: string,
    apellidos: string,
    correo: string,
    ficha: number,
    rol: number,
    login: boolean
}