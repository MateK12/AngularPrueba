import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BaseComponent } from 'src/app/common/components/base/base.component';
import { AppointmentService } from '../../../appointment.service';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Router } from '@angular/router';
import { eSteps } from '../../../models/steps.enum';

@Component({
    selector: 'app-applicant-details',
    templateUrl: './applicant-details.component.html',
    styleUrls: ['./applicant-details.component.less'],
})
export class ApplicantDetailsComponent extends BaseComponent implements OnInit {
    @Output() OnConfirmCreateOrUpdateClient = new EventEmitter<{
        idClient: number;
        stepChange: number;
    }>();
    formApplicantDetails!: FormGroup;
    visibleFormClient: boolean = false;
    textButtonClient: string = '';
    idClient: number = 0;
    isSearch: boolean = false;
    isSaving: boolean = false;
    DocumentsTypes = ["DNI", "CI", "CC", "CURP", "SD", "PAS"];
    Provinces = [
        "Buenos Aires",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucumán"
    ];
    Towns = [
        "Capital",
        "Godoy Cruz",
        "Guaymallén",
        "Junín",
        "La Paz",
        "Las Heras",
        "Lavalle",
        "Luján de Cuyo",
        "Maipú",
        "Malargüe",
        "Rivadavia",
        "San Carlos",
        "San Martín",
        "San Rafael",
        "Santa Rosa",
        "Tunuyán",
        "Tupungato"
    ];
    selectedIdType = "";
    selectedProvice = "";
    selectedTown = " ";
    nzTooltipTitleMessege = `Por favor, ingrese un ${this.selectedIdType} para la busqueda.`;

    captchaTooltipIcon: NzFormTooltipIcon = {
        type: 'info-circle',
        theme: 'twotone',
    };

    constructor(
        el: ElementRef,
        message: NzMessageService,
        router: Router,
        private fb: FormBuilder,
        private appoitmentService: AppointmentService
    ) {
        super(el, message, router);
        setTimeout(() => {
            console.log(this.selectedProvice)
        }, 8000)
    }
    ngOnInit(): void {
        this.createForm();
    }

    private createForm() {
        this.formApplicantDetails = this.fb.group({
            id: [0],
            dni: ['', [Validators.required]],
            // name: ['', [Validators.required]],
            // surname: ['', [Validators.required]],
            fullname: ['', [Validators.required]],
            email: ['', [Validators.email, Validators.required]],
            phone: ['', [Validators.required]],
        });
    }
    searchClient() {
        this.isSearch = true;
        let dni: string = this.formApplicantDetails.controls['dni'].value;
        if (this.formApplicantDetails.controls['dni'].invalid) {
            this.formApplicantDetails.controls['dni'].markAsDirty();
            this.formApplicantDetails.controls['dni'].updateValueAndValidity();
            return;
        }
        this.appoitmentService
            .getClientByDni(dni)
            .subscribe((response) => {
                response.data.dni = dni;
                this.formApplicantDetails.setValue(response.data);
                this.visibleFormClient = true;
                if (response.data.id === 0) {
                    this.textButtonClient = 'Registrar y continuar';
                } else {
                    this.textButtonClient = 'Modificar y continuar';
                }
            })
            .add(() => (this.isSearch = false));
    }
    createOrUpdateClient(): void {
        if (!this.isValidForm(this.formApplicantDetails, true)) return;
        this.isSaving = true;
        let client = this.formApplicantDetails.getRawValue();
        this.appoitmentService
            .createOrUpdateClient(client)
            .subscribe((response) => {
                this.OnConfirmCreateOrUpdateClient.emit({
                    idClient: response,
                    stepChange: eSteps.assingAppointment,
                });
            })
            .add(() => (this.isSaving = false));
    }
}
