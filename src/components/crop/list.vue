<template>
  <div role="tablist">
    <b-row class="my-1">
      <b-col sm="3">
        <label for="demo">Seleccionar demo</label>
      </b-col>
      <b-col sm="9">
        <b-form-select 
          id="demo"
          :options="demo.options"
          v-model="demo.name"
          @change="changeDemo"
        />
      </b-col>
    </b-row>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Monitoreo Fisiológico</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            Monitoreo Fisiológico
          </p>
          <p class="card-text">
            <b-form>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="day">Poblacion a los 20 días:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input 
                    type="text"
                    v-model="form.POBLACION_20DIAS_AJT"
                    placeholder="(plantas/ha)" 
                  />
                </b-col>
              </b-row>
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Crear rasta</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="altitude">Altitud del rasta:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input 
                    id="altitude"
                    type="text"
                    v-model="form.ALTURA_LOT"
                    placeholder="(metros)" 
                    v-validate="'required|numeric'"
                    name="altitude"
                    required
                  />
                  <span>{{ errors.first('altitude') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="slope">Pendiente:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input 
                    id="slope"
                    type="text"
                    v-model="form.PENDIENTE_RASTA"
                    placeholder="(%)" 
                    required
                  />
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="surrounding_land">Terreno circundante:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-select 
                    id="surrounding_land"
                    :value="null"
                    :options="surroundings"
                    v-model="form.TERRENO_CIRCUN_RASTA"
                    required>
                    <option slot="first" :value="null">Choose...</option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="positions">Posición del perfil:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-select 
                    id="positions"
                    :value="null"
                    :options="positions"
                    v-model="form.POSICION_PERFIL_RASTA"
                    required>
                    <option slot="first" :value="null">Choose...</option>
                  </b-form-select>
                </b-col>
              </b-row>
              <!--
              <pre>
                {{ form.TERRENO_CIRCUN_RASTA }}
              </pre>
              -->
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import demoSrvc from '../demo/demoSrvc.js'

  export default {
    data () {
      return {
        form: {
          POBLACION_20DIAS_AJT: '',
          TIPO_SIEMBRA : "",	
          SEM_TRATADAS : "",	
          MATERIAL_GENETICO : "",	
          CULT_ANT : "",	
          DRENAJE : "",	
          METODO_COSECHA : "",	
          ALMACENAMIENTO_FINCA : "",	
          DIAS_EN_EMERGER : "",	
          DIAS_EN_EMERGER_A_FLORECER : "",	
          DIAS_EN_FLORECER_A_COSECHAR : "",	
          POBLACION_20DIAS_AJT : "",	
          ALTURA_LOT : "",	
          ContEnfQui_Emer_Flor : "",	
          ContEnfQui_Flor_Cose : "",	
          ContMalMec_Siem_Emer : "",	
          ContMalMec_Emer_Flor : "",	
          ContMalMec_Flor_Cose : "",	
          ContMalQui_Antes_Siem : "",	
          ContMalQui_Siem_Emer : "",	
          ContMalQui_Emer_Flor : "",	
          ContMalQui_Flor_Cose : "",	
          ContPlaQui_Antes_Siem : "",	
          ContPlaQui_Siem_Emer : "",	
          ContPlaQui_Emer_Flor : "",	
          ContPlaQui_Flor_Cose : "",	
          TotN_Antes_Siem : "",	
          TotN_Siem_Emer : "",	
          TotN_Emer_Flor : "",	
          TotP_Antes_Siem : "",	
          TotP_Siem_Emer : "",	
          TotP_Emer_Flor : "",	
          TotK_Antes_Siem : "",	
          TotK_Siem_Emer : "",	
          TotK_Emer_Flor : "",	
          FerOrg_Emer_Flor : "",	
          FerQui_Antes_Siem : "",
          FerQui_Siem_Emer : "",	
          FerQui_Emer_Flor : "",	
          PENDIENTE_RASTA : "",	
          TERRENO_CIRCUN_RASTA : "",	
          POSICION_PERFIL_RASTA : "",	
          NO_CAPAS_RASTA : "",	
          PH_RASTA : "",	
          PEDREG_PERFIL_ROCAS : "",	
          CAP_ENDURE_RASTA : "",	
          PROFUND_CAP_ENDURE_RASTA : "",	
          ESPESOR_CAP_ENDURE_RASTA : "",	
          MOTEADOS_RASTA : "",	
          PROFUND_MOTEADOS_RASTA : "",	
          MOTEADOS_MAS70cm_RASTA : "",	
          ESTRUCTURA_RASTA : "",	
          OBSERVA_EROSION_RASTA : "",	
          OBSERVA_MOHO_RASTA : "",	
          OBSERVA_COSTRAS_DURAS_RASTA : "",	
          SITIO_EXPUESTO_SOL_RASTA : "",	
          OBSERVA_COSTRAS_BLANCAS_RASTA : "",	
          OBSERVA_COSTAS_NEGRAS_RASTA : "",	
          REGION_SECA_ARIDA_RASTA : "",	
          OBSERVA_RAICES_VIVAS_RASTA : "",	
          PROFUND_RAICES_VIVAS_RASTA : "",	
          OBSERVA_PLANTAS_PEQUENAS_RASTA : "",	
          OBSERVA_HOJARASCA_MO_RASTA : "",	
          SUELO_NEGRO_BLANDO_RASTA : "",	
          CUCHILLO_PRIMER_HTE_RASTA : "",	
          CERCA_RIOS_QUEBRADAS_RASTA : "",	
          RECUBRIMIENTO_VEGETAL__SUELO_RASTA : "",	
          prof_efectiva : "",	
          dinterno : "",	
          drenaje_externo : "",	
          Porc_A : "",	
          Porc_Ar : "",	
          Porc_ArA : "",	
          Porc_ArL : "",	
          Porc_FrL : "",	
          Porc_L : "",	
          Porc_F : "",	
          Porc_FAr : "",	
          Porc_FA : "",	
          Porc_AF : "",	
          Porc_BLANDO : "",	
          Porc_DURO : "",	
          Porc_EXT_DURO : "",	
          Porc_FRIABLE : "",	
          Porc_FIRME : "",	
          Porc_EXT_FIRME : "",	
          Porc_PLASTICO : "",	
          Porc_MUY_PLASTICO : "",	
          Temp_Max_Avg_Veg : "",	
          Temp_Min_Avg_Veg : "",	
          Temp_Avg_Veg : "",	
          Diurnal_Range_Avg_Veg : "",	
          Sol_Ener_Accu_Veg : "",	
          Temp_Max_34_Freq_Veg : "",	
          Rain_Accu_Veg : "",	
          Rain_10_Freq_Veg : "",	
          Rhum_Avg_Veg : "",	
          Temp_Max_Avg_For : "",	
          Temp_Min_Avg_For : "",	
          Temp_Avg_For : "",	
          Diurnal_Range_Avg_For : "",	
          Sol_Ener_Accu_For : "",	
          Temp_Max_34_Freq_For : "",	
          Rain_Accu_For : "",	
          Rain_10_Freq_For : "",	
          Rhum_Avg_For : "",	
          Temp_Max_Avg_Mad : "",	
          Temp_Min_Avg_Mad : "",	
          Temp_Avg_Mad : "",	
          Diurnal_Range_Avg_Mad : "",	
          Sol_Ener_Accu_Mad : "",	
          Temp_Max_34_Freq_Mad : "",	
          Rain_Accu_Mad : "",	
          Rain_10_Freq_Mad : "",	
          Rhum_Avg_Mad : ""
        },
        surroundings: { 
          'PLANO O LLANO': 'Plano o Llano', 
          'ONDULADO': 'Ondulado', 
          'MONTANIOSO': 'Montañoso', 
          'ONDULADO Y MONTANIOSO': 'Ondulado y Montañoso'
        },
        positions: { 
          'MESETA': 'Meseta',
          'CLIMA': 'Cima',
          'LADERA CONVEXA': 'Ladera Convexa',
          'LADERA CONCAVA': 'Ladera Cóncava',
          'LADERA PLANA': 'Ladera Plana',
          'PLANO': 'Plano',
          'PLANO CON ONDULACIONES': 'Plano con Ondulaciones',
          'PIE DE UNA ELEVACION': 'Pie de Elevación',
        },
        demo: {
          name: '',
          options: [
            { value: 0, text: 'Cultivo 1' },
            { value: 1, text: 'Cultivo 2' },
            { value: 2, text: 'Cultivo 3' },
            { value: 3, text: 'Cultivo 4' },
            { value: 4, text: 'Cultivo 5' },
            { value: 5, text: 'Cultivo 6' },
            { value: 6, text: 'Cultivo 7' },
            { value: 7, text: 'Cultivo 8' },
            { value: 8, text: 'Cultivo 9' },
            { value: 9, text: 'Cultivo 10' },
          ]
        },
      }
    },
    methods: {
      changeDemo(v){
        const list = demoSrvc.list()
        console.log('changeDemo', list[v])
        this.form.TERRENO_CIRCUN_RASTA = list[v]['TERRENO_CIRCUN_RASTA']
      },
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
    }
  }
</script>