import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Personne} from '../models';
import {PersonneRepository} from '../repositories';

export class PersonneController {
  constructor(
    @repository(PersonneRepository)
    public personneRepository : PersonneRepository,
  ) {}

  @post('/personnes')
  @response(200, {
    description: 'Personne model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personne)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personne, {
            title: 'NewPersonne',
            exclude: ['id'],
          }),
        },
      },
    })
    personne: Omit<Personne, 'id'>,
  ): Promise<Personne> {
    return this.personneRepository.create(personne);
  }

  @get('/personnes/count')
  @response(200, {
    description: 'Personne model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personne) where?: Where<Personne>,
  ): Promise<Count> {
    return this.personneRepository.count(where);
  }

  @get('/personnes')
  @response(200, {
    description: 'Array of Personne model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personne, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personne) filter?: Filter<Personne>,
  ): Promise<Personne[]> {
    return this.personneRepository.find(filter);
  }

  @patch('/personnes')
  @response(200, {
    description: 'Personne PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personne, {partial: true}),
        },
      },
    })
    personne: Personne,
    @param.where(Personne) where?: Where<Personne>,
  ): Promise<Count> {
    return this.personneRepository.updateAll(personne, where);
  }

  @get('/personnes/{id}')
  @response(200, {
    description: 'Personne model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personne, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personne, {exclude: 'where'}) filter?: FilterExcludingWhere<Personne>
  ): Promise<Personne> {
    return this.personneRepository.findById(id, filter);
  }

  @patch('/personnes/{id}')
  @response(204, {
    description: 'Personne PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personne, {partial: true}),
        },
      },
    })
    personne: Personne,
  ): Promise<void> {
    await this.personneRepository.updateById(id, personne);
  }

  @put('/personnes/{id}')
  @response(204, {
    description: 'Personne PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personne: Personne,
  ): Promise<void> {
    await this.personneRepository.replaceById(id, personne);
  }

  @del('/personnes/{id}')
  @response(204, {
    description: 'Personne DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personneRepository.deleteById(id);
  }
}
