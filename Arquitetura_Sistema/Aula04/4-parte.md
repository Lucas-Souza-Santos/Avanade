## Transactions


    * Um banco de dados deve permitir que várias pessoas deva
    acessar ao mesmo tempo.
    * cada usuário é tratado como uma transactions diferente.
    * impedir que eu altere um transactions e outro depois 
    altere a mesma transactions e sobreponha a mim... quem 
    inicio primeiro tem prioridade...
    * Inicio, Resolução e Fim
    * ACID - Transactions
        -> Atomicidade:
            Todas operações executadas com sucesso. Commit ou 
            Rollback
        -> Consistência:
            Unicidade da chaves, restriçoes de integridade 
            lógica, etc
        -> Isolamento:
            Várias transações podem acontecer simultaneamente
            o mesmo registro(ou parte do registro)
        -> Durabilidade:
            Depois do Commit, mesmo com erros, queda de
            energia, etc. As alterações devem ser aplicadas.








