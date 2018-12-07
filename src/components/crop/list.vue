<template>
  <div role="tablist">
    <b-row class="my-1">
      <b-col sm="3">
        <label for="demo">Seleccionar demo</label>
      </b-col>
      <b-col sm="6">
        <b-form-select 
          id="demo"
          :options="demo.options"
          v-model="demo.name"
          @change="changeDemo"
        />
      </b-col>
    </b-row>
    <br>
    <br>
    <br>
    <b-card no-body class="mb-1"> <!-- Siembra -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion6 variant="info">Siembra</b-btn>
      </b-card-header>
      <b-collapse id="accordion6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="seedtime">Fecha de siembra:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="date"
                    v-model="seedtime"
                    required 
                  />
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="typeOfPlanting">Metodo de siembra:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="typeOfPlanting"
                    :value="null"
                    :options="typeOfPlanting"
                    v-model="form.TIPO_SIEMBRA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>              
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="performDrainage">Se hace drenaje a la parcela:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="performDrainage" v-model="form.DRENAJE" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="treatedSeeds">Semillas tratadas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="treatedSeeds" v-model="form.SEM_TRATADAS" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="geneticMaterial">Material genético (nombre):</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="geneticMaterial"
                    :value="null"
                    :options="geneticMaterial"
                    v-model="form.MATERIAL_GENETICO"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="previousCrop">Cultivo anterior:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="previousCrop"
                    :value="null"
                    :options="previousCrop"
                    v-model="form.CULT_ANT"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>  
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1"> <!-- Monitoreo Fisiologico-->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Monitoreo Fisiológico</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="poblation">Poblacion a los 20 días:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.POBLACION_20DIAS_AJT"
                    placeholder="(plantas/ha)"
                    v-validate="'numeric'" 
                    name = poblation
                  />
                  <span>{{ errors.first('poblation') }}</span>
                </b-col>
              </b-row>
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1"> <!-- Manejo fitosanitario -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion4 variant="info">Manejo Fitosanitario</b-btn>
      </b-card-header>
      <b-collapse id="accordion4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <h3 align="left">
                Antes de la siembra cuantos controles realiza:
              </h3>
              <br>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalUndergrowtControlBC">Tipo químico con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalQui_Antes_Siem"
                    v-validate="'numeric'" 
                    name = chemicalUndergrowthControlBC
                  />
                  <span>{{ errors.first('chemicalUndergrowthControlBC') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalPestControlBC">Tipo químico con el objetivo de plagas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContPlaQui_Antes_Siem"
                    v-validate="'numeric'" 
                    name = chemicalPestControlBC
                  />
                  <span>{{ errors.first('chemicalPestControlBC') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Entre la siembra y emergencia cuantos controles realiza:
              </h3>
              <br>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalUndergrowtControlCE">Tipo químico con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalQui_Siem_Emer"
                    v-validate="'numeric'" 
                    name = chemicalUndergrowthControlCE
                  />
                  <span>{{ errors.first('chemicalUndergrowthControlCE') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="mechanizedWeedControlCE">Tipo mecanizado con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalMec_Siem_Emer"
                    v-validate="'numeric'" 
                    name = mechanizedWeedControlCE
                  />
                  <span>{{ errors.first('mechanizedWeedControlCE') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalPestControlCE">Tipo químico con el objetivo de plagas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContPlaQui_Siem_Emer"
                    v-validate="'numeric'" 
                    name = chemicalPestControlCE
                  />
                  <span>{{ errors.first('chemicalPestControlCE') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Entre la emergencia y floración cuantos controles realiza:
              </h3>
              <br>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalDiseaseControlEF">Tipo químico con el objetivo de enfermedades:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContEnfQui_Emer_Flor"
                    v-validate="'numeric'" 
                    name = chemicalDiseaseControlEF
                  />
                  <span>{{ errors.first('chemicalDiseaseControlEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalUndergrowtControlEF">Tipo químico con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalQui_Emer_Flor"
                    v-validate="'numeric'" 
                    name = chemicalUndergrowthControlEF
                  />
                  <span>{{ errors.first('chemicalUndergrowthControlEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="mechanizedWeedControlEF">Tipo mecanizado con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalMec_Emer_Flor"
                    v-validate="'numeric'" 
                    name = mechanizedWeedControlEF
                  />
                  <span>{{ errors.first('mechanizedWeedControlEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalPestControlEF">Tipo químico con el objetivo de plagas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContPlaQui_Emer_Flor"
                    v-validate="'numeric'" 
                    name = chemicalPestControlEF
                  />
                  <span>{{ errors.first('chemicalPestControlEF') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Entre la floración y cosecha cuantos controles realiza:
              </h3>
              <br>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalDiseaseControlFH">Tipo químico con el objetivo de enfermedades:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContEnfQui_Flor_Cose"
                    v-validate="'numeric'" 
                    name = chemicalDiseaseControlFH
                  />
                  <span>{{ errors.first('chemicalDiseaseControlFH') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalUndergrowtControlFH">Tipo químico con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalQui_Flor_Cose"
                    v-validate="'numeric'" 
                    name = chemicalUndergrowthControlFH
                  />
                  <span>{{ errors.first('chemicalUndergrowthControlFH') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="mechanizedWeedControlFH">Tipo mecanizado con el objetivo de malezas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContMalMec_Flor_Cose"
                    v-validate="'numeric'" 
                    name = mechanizedWeedControlFH
                  />
                  <span>{{ errors.first('mechanizedWeedControlFH') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="chemicalPestControlFH">Tipo químico con el objetivo de plagas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ContPlaQui_Flor_Cose"
                    v-validate="'numeric'" 
                    name = chemicalPestControlFH
                  />
                  <span>{{ errors.first('chemicalPestControlFH') }}</span>
                </b-col>
              </b-row>
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1"> <!-- Nutricion -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Nutrición</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <h3 align="left">
                Fertilizaciones químicas antes de la siembra
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="nitrogenBC">Cantidad total aplicada de nitrógeno:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotN_Antes_Siem"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = nitrogenBC
                  />
                  <span>{{ errors.first('nitrogenBC') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="potassiumBC">Cantidad total aplicada de potasio:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotK_Antes_Siem"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = potassiumBC
                  />
                  <span>{{ errors.first('potassiumBC') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="matchBC">Cantidad total aplicada de fósforo:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotP_Antes_Siem"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = matchBC
                  />
                  <span>{{ errors.first('matchBC') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="aplicationBC">En cuantas aplicaciones realiza la fertilizacion:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.FerQui_Antes_Siem"
                    v-validate="'numeric'" 
                    name = aplicationBC
                  />
                  <span>{{ errors.first('aplicationBC') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Fertilizaciones químicas entre la siembra y emergencia
              </h3>        
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="nitrogenCE">Cantidad total aplicada de nitrógeno:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotN_Siem_Emer"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = nitrogenCE
                  />
                  <span>{{ errors.first('nitrogenCE') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="potassiumCE">Cantidad total aplicada de potasio:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotK_Siem_Emer"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = potassiumCE
                  />
                  <span>{{ errors.first('potassiumCE') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="matchCE">Cantidad total aplicada de fósforo:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotP_Siem_Emer"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = matchCE
                  />
                  <span>{{ errors.first('matchCE') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="aplicationCE">En cuantas aplicaciones realiza la fertilizacion:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.FerQui_Siem_Emer"
                    v-validate="'numeric'" 
                    name = aplicationBC
                  />
                  <span>{{ errors.first('aplicationCE') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Fertilizaciones químicas entre la emergencia y la floración
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="nitrogenEF">Cantidad total aplicada de nitrógeno:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotN_Emer_Flor"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = nitrogenEF
                  />
                  <span>{{ errors.first('nitrogenEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="potassiumEF">Cantidad total aplicada de potasio:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotK_Emer_Flor"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = potassiumEF
                  />
                  <span>{{ errors.first('potassiumEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="matchEF">Cantidad total aplicada de fósforo:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.TotP_Emer_Flor"
                    placeholder="(lts/ha)"
                    v-validate="'numeric'" 
                    name = matchEF
                  />
                  <span>{{ errors.first('matchEF') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="aplicationEF">En cuantas aplicaciones realiza la fertilizacion:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.FerQui_Emer_Flor"
                    v-validate="'numeric'" 
                    name = aplicationEF
                  />
                  <span>{{ errors.first('aplicationEF') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Fertilizaciones organicas entre la emergencia y la floración
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="aplicationOrganicEF">Cuantas aplicaciones realiza:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.FerOrg_Emer_Flor"
                    v-validate="'numeric'" 
                    name = aplicationOrganicEF
                  />
                  <span>{{ errors.first('aplicationOrganicEF') }}</span>
                </b-col>
              </b-row>             
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1"> <!-- Cosecha -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion5 variant="info">Cosecha</b-btn>
      </b-card-header>
      <b-collapse id="accordion5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="harvesttime">Fecha de cosecha:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="date"
                    v-model="harvesttime"
                    required 
                  />
                  
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="typeOfHarvest">Metodo de cosecha:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="typeOfHarvest"
                    :value="null"
                    :options="typeOfPlanting" 
                    v-model="form.METODO_COSECHA"
                    required/>
                    <option slot="first" :value="null"></option><!-- options son las mismas opciones para metodo de siembra-->
                  </b-form-select>
                </b-col>
              </b-row> 
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="store">Se hace almacenamiento en finca:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="store" v-model="form.ALMACENAMIENTO_FINCA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1"> <!-- Rasta -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Rasta</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <b-form>
              <h3 align="left">
                Caracteristicas y Observaciones
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="altitude">Altitud del rasta:</label>
                </b-col>
                <b-col sm="6">
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
                <b-col align="left" sm="3">
                  <label for="slope">Pendiente:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    name = slope
                    type="text"
                    v-model="form.PENDIENTE_RASTA"
                    placeholder="(%)"
                    v-validate="'numeric'"  
                    required
                  />
                  <span>{{ errors.first('slope') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="surrounding_land">Terreno circundante:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="surrounding_land"
                    :value="null"
                    :options="surroundings"
                    v-model="form.TERRENO_CIRCUN_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="positions">Posición del perfil:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="positions"
                    :value="null"
                    :options="positions"
                    v-model="form.POSICION_PERFIL_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <h3 align="left">
                Horizontes
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="ph">Ph:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    name = ph
                    type="text"
                    v-model="form.PH_RASTA"
                    v-validate="'numeric'"  
                    required
                  />
                  <span>{{ errors.first('ph') }}</span>
                </b-col>
              </b-row>
              <h3 align="left">
                Pedregosidad
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="rocksProfile">Pedregosidad en el perfil:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="rocksProfile"
                    :value="null"
                    :options="rocksProfile"
                    v-model="form.PEDREG_PERFIL_ROCAS"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <h3 align="left">
                Capas endurecidas
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="hardenedLayer">Capas endurecidas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="hardenedLayer" v-model="form.CAP_ENDURE_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row v-if="form.CAP_ENDURE_RASTA == 'SI'" class="my-1">
               <b-col align="left" sm="3">
                <label for="depthHardenedLayer">Profundidad de capas endurecidas:</label>
               </b-col>
               <b-col sm="6">
                <b-form-input 
                  type="text"
                  v-model="form.PROFUND_CAP_ENDURE_RASTA"
                  placeholder="(cm)"
                  v-validate="'numeric'" 
                  name = depthHardenedLayer
                />
                <span>{{ errors.first('depthHardenedLayer') }}</span>
               </b-col>
              </b-row>
              <b-row v-if="form.CAP_ENDURE_RASTA == 'SI'" class="my-1">
                <b-col align="left" sm="3">
                 <label for="thicknessHardenedLayer">Espesor de capas endurecidas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.ESPESOR_CAP_ENDURE_RASTA"
                    placeholder="(cm)"
                    v-validate="'numeric'" 
                    name = thicknessHardenedLayer
                  />
                  <span>{{ errors.first('thicknessHardenedLayer') }}</span>
                 </b-col>
              </b-row>
              <h3 align="left">
                Suelo Moteado
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="mottled">Moteados:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="mottled" v-model="form.MOTEADOS_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row v-if="form.MOTEADOS_RASTA == 'SI'" class="my-1">
                <b-col align="left" sm="3">
                  <label for="depthMottled">Profundidad de moteados:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.PROFUND_MOTEADOS_RASTA"
                    placeholder="(cm)"
                    v-validate="'numeric'" 
                    name = depthMottled
                  />
                  <span>{{ errors.first('depthMottled') }}</span>
                </b-col>
              </b-row>
              <b-row v-if="form.MOTEADOS_RASTA == 'SI'" class="my-1">
                <b-col align="left" sm="3">
                  <label for="mottled70">Moteados mas bajo de 70cm:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="mottled70" v-model="form.MOTEADOS_MAS70cm_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <h3 align="left">
                Estructura del suelo
              </h3>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="soilStructure">Estructura del suelo:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="soilStructure"
                    :value="null"
                    :options="soilStructure"
                    v-model="form.ESTRUCTURA_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="erosion">Erosion:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="erosion" v-model="form.OBSERVA_EROSION_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="rust">Moho:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="rust" v-model="form.OBSERVA_MOHO_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>   
               <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="hardScabs">Cotras duras:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="hardScabs"
                    :value="null"
                    :options="hardScabs"
                    v-model="form.OBSERVA_COSTRAS_DURAS_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="siteExposedSun">Sitio expuesto al sol:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="siteExposedSun"
                    :value="null"
                    :options="siteExposedSun"
                    v-model="form.SITIO_EXPUESTO_SOL_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="whiteScabs">Costras blancas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="whiteScabs"
                    :value="null"
                    :options="whiteScabs"
                    v-model="form.OBSERVA_COSTRAS_BLANCAS_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="blackscabs">Costras negras:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="blackscabs"
                    :value="null"
                    :options="blackscabs"
                    v-model="form.OBSERVA_COSTAS_NEGRAS_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="dryRegion">Region seca:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="dryRegion" v-model="form.REGION_SECA_ARIDA_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="liveReices">Raices vivas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="liveReices" v-model="form.OBSERVA_RAICES_VIVAS_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row v-if="form.OBSERVA_RAICES_VIVAS_RASTA == 'SI'" class="my-1">
                <b-col align="left" sm="3">
                  <label for="depthLiveReices">Profundidad raices vivas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-input 
                    type="text"
                    v-model="form.PROFUND_RAICES_VIVAS_RASTA"
                    placeholder="(cm)"
                    v-validate="'numeric'" 
                    name = depthLiveReices
                  />
                  <span>{{ errors.first('depthLiveReices') }}</span>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="affectedPlants">Crecimiento de las plantas afectadas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="affectedPlants"
                    :value="null"
                    :options="affectedPlants"
                    v-model="form.OBSERVA_PLANTAS_PEQUENAS_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="hojarasca">Mucha hojarasca:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="hojarasca" v-model="form.OBSERVA_HOJARASCA_MO_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="blackSoftSoil">Suelo es muy negro, muy blando:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="blackSoftSoil" v-model="form.SUELO_NEGRO_BLANDO_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>  
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="knifeEffortlessly">Cuchillo entra in ningún esfuerzo:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="knifeEffortlessly" v-model="form.CUCHILLO_PRIMER_HTE_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="underground">Cerca de agua subterránea:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-group>
                    <b-form-radio-group id="underground" v-model="form.CERCA_RIOS_QUEBRADAS_RASTA" plain :options="yesOrNot">
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>   
              <b-row class="my-1">
                <b-col align="left" sm="3">
                  <label for="plantCover">Crecimiento de las plantas afectadas:</label>
                </b-col>
                <b-col sm="6">
                  <b-form-select 
                    id="plantCover"
                    :value="null"
                    :options="plantCover"
                    v-model="form.RECUBRIMIENTO_VEGETAL__SUELO_RASTA"
                    required/>
                    <option slot="first" :value="null"></option>
                  </b-form-select>
                </b-col>
              </b-row>
            </b-form>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    
    <b-button align="right" size="link"> Optimizar  </b-button>
  </div>
</template>

<script>
  import demoSrvc from '../demo/demoSrvc.js'

  export default {
    data () {
      return {
        seedtime : '',
        harvesttime : '',
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

        rocksProfile : {
          'SIN ROCAS' : 'Sin rocas',
          'ROCOSO' : 'Rocoso',
          'MUY ROCOSO' : 'Muy rocoso'
        },

        affectedPlants : {
          'MUY AFECTADAS' : 'Muy afectadas',
          'POCO AFECTADAS' : 'Poco afectadas',
          'PLANTAS NORMALES' : 'Plantas normales',
          'NO HAY CULTIVO' : 'No hay cultivo'
        },
        plantCover : {
          'MUY BUENO':'Muy bueno',
          'BUENO':'Bueno',
          'REGULAR':'Regular',
          'ESPACIADO':'Espaciado',
          'SIN COBERTURA' : 'Sin cobertura'
        },
        hardScabs : {
          'MUY MARCADAS' : 'Muy marcadas',
          'POCO MARCADAS' : 'Poco marcadas',
          'NO HAY' : 'No hay'
        },
        siteExposedSun : {
          'LA MANIANA Y LA TARDE' : 'La mañana y la tarde',
          'LA MANIANA' : 'La mañana',
          'LA TARDE' : 'La tarde'
        },
        whiteScabs : {
          'MUY MARCADAS' : 'Muy marcadas',
          'POCO MARCADAS' : 'Poco marcadas',
          'NO HAY' : 'No hay'
        },
        blackscabs :{
          'MUY MARCADAS' : 'Muy marcadas',
          'POCO MARCADAS' : 'Poco marcadas',
          'NO HAY' : 'No hay'
        },
        soilStructure : {
          'ATERRONADA' : 'Aterronada',
          'GRANULAR' : 'Granula',
          'COLUMNAR' : 'Columnar',
          'PRISMATICA' : 'Prismática',
          'MASIVA' : 'Masiva',   
          'SUELTA O POLVOSA' : 'Suelta o Polvosa'
        },   

        previousCrop : {
          'Algodon' : 'Algodón',
          'Frijol' : 'Frijol',
          'Maiz' : 'Maíz',
          'Pastos' : 'Pastos',
          'Yuca' : 'Yuca',
          'Otro' : 'Otro'
        },
       
        yesOrNot : {
          'SI' : 'Si',
          'NO' : 'No'
        },

        geneticMaterial : {
          'PIONEER 30F32' : 'PIONEER 30F32',
          'PIONEER 30F35' : 'PIONEER 30F35',
          'ADV 9293 (Syngenta)' : 'ADV 9293 (Syngenta)',
          'ADV 9339 (Syngenta)' : 'ADV 9339 (Syngenta)',
          'Cerato (Syngenta)' : 'Cerato (Syngenta)',
          'CORPOICA V 114' : 'CORPOICA V 114',
          'DK 1040' : 'DK 1040',
          'DK1596' : 'DK1596',
          'DK 234' : 'DK 234',
          'DK 234 YGRR' : 'DK 234 YGRR',
          'DK7088' : 'DK7088',
          'Otro' : 'Otro'
        },
        typeOfPlanting : {
          'Manual' : 'Manual',
          'Mecanizado' : 'Mecanizado'
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
        
        this.form.TIPO_SIEMBRA = list[v]['TIPO_SIEMBRA']
        this.form.SEM_TRATADAS = list[v]['SEM_TRATADAS']
        this.form.MATERIAL_GENETICO = list[v]['MATERIAL_GENETICO']
        this.form.CULT_ANT = list[v]['CULT_ANT']
        this.form.DRENAJE = list[v]['DRENAJE']
        this.form.METODO_COSECHA = list[v]['METODO_COSECHA']
        this.form.ALMACENAMIENTO_FINCA = list[v]['ALMACENAMIENTO_FINCA']
        this.form.DIAS_EN_EMERGER = list[v]['DIAS_EN_EMERGER']
        this.form.DIAS_EN_EMERGER_A_FLORECER = list[v]['DIAS_EN_EMERGER_A_FLORECER']  
        this.form.DIAS_EN_FLORECER_A_COSECHAR = list[v]['DIAS_EN_FLORECER_A_COSECHAR']
        this.form.POBLACION_20DIAS_AJT = list[v]['POBLACION_20DIAS_AJT'] 
        this.form.ALTURA_LOT = list[v]['ALTURA_LOT']
        this.form.ContEnfQui_Emer_Flor = list[v]['ContEnfQui_Emer_Flor']
        this.form.ContEnfQui_Flor_Cose = list[v]['ContEnfQui_Flor_Cose']
        this.form.ContMalMec_Siem_Emer = list[v]['ContMalMec_Siem_Emer']
        this.form.ContMalMec_Emer_Flor = list[v]['ContMalMec_Emer_Flor']
        this.form.ContMalMec_Flor_Cose = list[v]['ContMalMec_Flor_Cose']
        this.form.ContMalQui_Antes_Siem = list[v]['ContMalQui_Antes_Siem']
        this.form.ContMalQui_Siem_Emer = list[v]['ContMalQui_Siem_Emer']
        this.form.ContMalQui_Emer_Flor = list[v]['ContMalQui_Emer_Flor']
        this.form.ContMalQui_Flor_Cose = list[v]['ContMalQui_Flor_Cose']
        this.form.ContPlaQui_Antes_Siem = list[v]['ContPlaQui_Antes_Siem']
        this.form.ContPlaQui_Siem_Emer = list[v]['ContPlaQui_Siem_Emer']
        this.form.ContPlaQui_Emer_Flor = list[v]['ContPlaQui_Emer_Flor']
        this.form.ContPlaQui_Flor_Cose = list[v]['ContPlaQui_Flor_Cose']
        this.form.TotN_Antes_Siem = list[v]['TotN_Antes_Siem']
        this.form.TotN_Siem_Emer = list[v]['TotN_Siem_Emer']
        this.form.TotN_Emer_Flor = list[v]['TotN_Emer_Flor']
        this.form.TotP_Antes_Siem = list[v]['TotP_Antes_Siem']
        this.form.TotP_Siem_Emer = list[v]['TotP_Siem_Emer']
        this.form.TotP_Emer_Flor = list[v]['TotP_Emer_Flor']
        this.form.TotK_Antes_Siem = list[v]['TotK_Antes_Siem']
        this.form.TotK_Siem_Emer = list[v]['TotK_Siem_Emer'] 
        this.form.TotK_Emer_Flor = list[v]['TotK_Emer_Flor']  
        this.form.FerOrg_Emer_Flor = list[v]['FerOrg_Emer_Flor']
        this.form.FerQui_Antes_Siem = list[v]['FerQui_Antes_Siem']
        this.form.FerQui_Siem_Emer = list[v]['FerQui_Siem_Emer']
        this.form.FerQui_Emer_Flor = list[v]['FerQui_Emer_Flor']
        this.form.PENDIENTE_RASTA = list[v]['PENDIENTE_RASTA']
        this.form.TERRENO_CIRCUN_RASTA = list[v]['TERRENO_CIRCUN_RASTA']
        this.form.POSICION_PERFIL_RASTA = list[v]['POSICION_PERFIL_RASTA']
        this.form.NO_CAPAS_RASTA = list[v]['NO_CAPAS_RASTA']
        this.form.PH_RASTA = list[v]['PH_RASTA'] 
        this.form.PEDREG_PERFIL_ROCAS = list[v]['PEDREG_PERFIL_ROCAS']
        this.form.CAP_ENDURE_RASTA = list[v]['CAP_ENDURE_RASTA']
        this.form.PROFUND_CAP_ENDURE_RASTA = list[v]['PROFUND_CAP_ENDURE_RASTA']  
        this.form.ESPESOR_CAP_ENDURE_RASTA = list[v]['ESPESOR_CAP_ENDURE_RASTA']  
        this.form.MOTEADOS_RASTA = list[v]['MOTEADOS_RASTA']
        this.form.PROFUND_MOTEADOS_RASTA = list[v]['PROFUND_MOTEADOS_RASTA']
        this.form.MOTEADOS_MAS70cm_RASTA = list[v]['MOTEADOS_MAS70cm._RASTA'] 
        this.form.ESTRUCTURA_RASTA = list[v]['ESTRUCTURA_RASTA']
        this.form.OBSERVA_EROSION_RASTA = list[v]['OBSERVA_EROSION_RASTA']
        this.form.OBSERVA_MOHO_RASTA = list[v]['OBSERVA_MOHO_RASTA']
        this.form.OBSERVA_COSTRAS_DURAS_RASTA = list[v]['OBSERVA_COSTRAS_DURAS_RASTA']
        this.form.SITIO_EXPUESTO_SOL_RASTA = list[v]['SITIO_EXPUESTO_SOL_RASTA']
        this.form.OBSERVA_COSTRAS_BLANCAS_RASTA = list[v]['OBSERVA_COSTRAS_BLANCAS_RASTA']
        this.form.OBSERVA_COSTAS_NEGRAS_RASTA = list[v]['OBSERVA_COSTAS_NEGRAS_RASTA']
        this.form.REGION_SECA_ARIDA_RASTA = list[v]['REGION_SECA_ARIDA_RASTA']
        this.form.OBSERVA_RAICES_VIVAS_RASTA = list[v]['OBSERVA_RAICES_VIVAS_RASTA']
        this.form.PROFUND_RAICES_VIVAS_RASTA = list[v]['PROFUND_RAICES_VIVAS_RASTA']
        this.form.OBSERVA_PLANTAS_PEQUENAS_RASTA = list[v]['OBSERVA_PLANTAS_PEQUENAS_RASTA'] 
        this.form.OBSERVA_HOJARASCA_MO_RASTA = list[v]['OBSERVA_HOJARASCA_MO_RASTA']
        this.form.SUELO_NEGRO_BLANDO_RASTA = list[v]['SUELO_NEGRO_BLANDO_RASTA']
        this.form.CUCHILLO_PRIMER_HTE_RASTA = list[v]['CUCHILLO_PRIMER_HTE_RASTA']
        this.form.CERCA_RIOS_QUEBRADAS_RASTA = list[v]['CERCA_RIOS_QUEBRADAS_RASTA']
        this.form.RECUBRIMIENTO_VEGETAL__SUELO_RASTA = list[v]['RECUBRIMIENTO_VEGETAL__SUELO_RASTA']
        this.form.prof_efectiva = list[v]['prof_efectiva']
        this.form.dinterno = list[v]['dinterno']
        this.form.drenaje_externo = list[v]['drenaje_externo']
        this.form.Porc_A = list[v]['Porc_A']
        this.form.Porc_Ar = list[v]['Porc_Ar']
        this.form.Porc_ArA = list[v]['Porc_ArA']
        this.form.Porc_ArL = list[v]['Porc_ArL'] 
        this.form.Porc_FrL = list[v]['Porc_FrL'] 
        this.form.Porc_L = list[v]['Porc_L']
        this.form.Porc_F = list[v]['Porc_F']
        this.form.Porc_FAr = list[v]['Porc_FAr']
        this.form.Porc_FA = list[v]['Porc_FA']
        this.form.Porc_AF = list[v]['Porc_AF']
        this.form.Porc_BLANDO = list[v]['Porc_BLANDO']
        this.form.Porc_DURO = list[v]['Porc_DURO']
        this.form.Porc_EXT_DURO = list[v]['Porc_EXT_DURO']
        this.form.Porc_FRIABLE = list[v]['Porc_FRIABLE']
        this.form.Porc_FIRME = list[v]['Porc_FIRME']
        this.form.Porc_EXT_FIRME = list[v]['Porc_EXT_FIRME']
        this.form.Porc_PLASTICO = list[v]['Porc_PLASTICO']
        this.form.Porc_MUY_PLASTICO = list[v]['Porc_MUY_PLASTICO']
        this.form.Temp_Max_Avg_Veg = list[v]['Temp_Max_Avg_Veg']
        this.form.Temp_Min_Avg_Veg = list[v]['Temp_Min_Avg_Veg']
        this.form.Temp_Avg_Veg = list[v]['Temp_Avg_Veg']
        this.form.Diurnal_Range_Avg_Veg = list[v]['Diurnal_Range_Avg_Veg']
        this.form.Sol_Ener_Accu_Veg = list[v]['Sol_Ener_Accu_Veg']
        this.form.Temp_Max_34_Freq_Veg = list[v]['Temp_Max_34_Freq_Veg'] 
        this.form.Rain_Accu_Veg = list[v]['Rain_Accu_Veg']
        this.form.Rain_10_Freq_Veg = list[v]['Rain_10_Freq_Veg']
        this.form.Rhum_Avg_Veg = list[v]['Rhum_Avg_Veg']
        this.form.Temp_Max_Avg_For = list[v]['Temp_Max_Avg_For']
        this.form.Temp_Min_Avg_For = list[v]['Temp_Min_Avg_For']
        this.form.Temp_Avg_For = list[v]['Temp_Avg_For']
        this.form.Diurnal_Range_Avg_For = list[v]['Diurnal_Range_Avg_For']
        this.form.Sol_Ener_Accu_For = list[v]['Sol_Ener_Accu_For']
        this.form.Temp_Max_34_Freq_For = list[v]['Temp_Max_34_Freq_For'] 
        this.form.Rain_Accu_For = list[v]['Rain_Accu_For']
        this.form.Rain_10_Freq_For = list[v]['Rain_10_Freq_For'] 
        this.form.Rhum_Avg_For = list[v]['Rhum_Avg_For']
        this.form.Temp_Max_Avg_Mad = list[v]['Temp_Max_Avg_Mad']
        this.form.Temp_Min_Avg_Mad = list[v]['Temp_Min_Avg_Mad']
        this.form.Temp_Avg_Mad = list[v]['Temp_Avg_Mad']
        this.form.Diurnal_Range_Avg_Mad = list[v]['Diurnal_Range_Avg_Mad'] 
        this.form.Sol_Ener_Accu_Mad = list[v]['Sol_Ener_Accu_Mad']
        this.form.Temp_Max_34_Freq_Mad = list[v]['Temp_Max_34_Freq_Mad']
        this.form.Rain_Accu_Mad = list[v]['Rain_Accu_Mad']
        this.form.Rain_10_Freq_Mad = list[v]['Rain_10_Freq_Mad']
        this.form.Rhum_Avg_Mad = list[v]['Rhum_Avg_Mad']
      },
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
    }
  }
</script>

<style scoped>
h3 {
    border-bottom: 1px solid #e5e5e5;
}
.btn {
    font-weight: 800;
    text-align: left;
}
.btn-info {
    color: #333;
    background-color: #B8CF59;
    border-color: #E9E9E9;
}
.btn-secondary{
    color: #FFF;
    background-color: #AD68A3;
    border-color: #6c757d;
}
</style>