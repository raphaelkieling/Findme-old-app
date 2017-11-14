import { Categoria } from './../../domain/categoria';
import { LoginPage } from './../login/login';
import { Usuario } from './../../domain/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { BaseProvider } from '../../providers/base/base';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  tipoUsuario: string;
  image: string = '';

  categorias: Categoria[] = [];

  formPrestador: FormGroup;
  formCliente: FormGroup;
  formUsuario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseProvider,
    private transfer: FileTransfer,
    private camera: Camera,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.buildFormularioUsuario();
    this.buildFormularioCliente();
    this.buildFormularioPrestador();
  }


  ngOnInit() {

  }

  mudarFormulario(tipoUsuario) {
    console.log('entrei');

    this.formCliente.reset();
    this.formPrestador.reset();

    if (tipoUsuario === 'service')
      this.carregaCategorias();
    this.tipoUsuario = tipoUsuario;
  }

  carregaCategorias() {
    this.baseService.getAll('categoriaservico')
      .subscribe(categorias => {
        console.log('rolou')
        this.categorias = categorias;
      });
  }

  carregarFoto() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true
    }
    let loader = this.criarLoader();
    loader.present();

    this.camera.getPicture(options)
      .then((imageData) => {
        this.image = 'data:image/jpeg;base64,' + imageData;
      })
      .catch(() => {
        this.alertCtrl.create({
          title: 'Cancelado',
          subTitle: 'Parece que você cancelou a seleção de imagem',
          buttons: ['Entendi']
        }).present();
      });

    loader.dismiss();

  }

  async finalizar() {
    let loader = this.criarLoader();
    loader.present();

    this.colocaImagemNaPessoa();
    console.log(this.formCliente);
    let usuario: Usuario = {
      email: this.formUsuario.get('email').value,
      senha: this.formUsuario.get('senha').value,
      pessoa: {
        nome: this.formCliente.get('nome').value,
        telefone: this.formCliente.get('telefone').value,
        cpf: this.formCliente.get('cpf').value,
        rg: this.formCliente.get('rg').value,
        idade: this.formCliente.get('idade').value,
        permissao:'cliente'
      }
    }

    if (this.image.length > 0) {
      usuario.pessoa.imagem = {
        url: this.formCliente.get('imagem').value
      }
      console.log(this.formCliente.get('imagem').value);
    }

    if (this.formPrestador.dirty) {
      this.formCliente.get('permissao').setValue('prestador');
      usuario.pessoa.permissao = 'prestador';
      usuario.pessoa.prestador = {
        categoria: this.formPrestador.get('categoria').value,
        cnpj: this.formPrestador.get('cnpj').value,
        descricao: this.formPrestador.get('descricao').value
      }
    }

    console.log(this.formCliente);

    this.baseService.post('usuario', usuario)
      .subscribe(res => {
        this.alertCtrl.create({
          title: 'Uhul!',
          subTitle: 'Você acabou de se cadastrar, entre e encontre quem procura!',
          buttons: ['SIMM!']
        }).present();

        this.navCtrl.push(LoginPage)
        loader.dismiss();
      }, err => {
        this.alertCtrl.create({
          title: 'Ops!',
          subTitle: 'Houve algum problema no cadastro, tente dar uma olhada se não faltou algo!',
          buttons: ['Tá bem!']
        }).present();

        loader.dismiss();
      })

      console.log(usuario)

  }

  colocaImagemNaPessoa() {
    this.formCliente.get('imagem').setValue(this.image);
  }

  buildFormularioCliente() {
    this.formCliente = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [],
      idade: [],
      permissao: ['cliente'],
      imagem: []
    })
  }

  buildFormularioPrestador() {
    this.formPrestador = this.formBuilder.group({
      cnpj: [null, Validators.required],
      descricao: [null, Validators.required],
      categoria: [null, Validators.required]
    })
  }

  buildFormularioUsuario() {
    this.formUsuario = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
    })
  }

  criarLoader() {
    return this.loadingCtrl.create({
      content: "Aguarde um momento"
    });
  }
}
